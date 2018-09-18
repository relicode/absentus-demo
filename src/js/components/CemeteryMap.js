import React, { Component } from 'react'
import { Circle, Map, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

import Block from '../utils/block'
import { MAP_SET_ZOOM_LEVEL } from '../actions/types'
import { plotsSelector } from '../selectors/CemeteryMap'


const UNOCCUPIED = 'UNOCCUPIED'

const getBlockColor = (block) => {
  if (block.tasks.filter((task) => task.urgent).length) {
    return 'red'
  }
  if (block.tasks.length) {
    return 'yellow'
  }
  return 'green'
}

class CemeteryMap extends Component {
  handleClick = (ev) => {
    const latLon = [ev.latlng.lat, ev.latlng.lng]
    console.log(latLon) // eslint-disable-line no-console
    return latLon
  }

  renderBlocks() {
    return this.props.blocks.map((block) => (
      <Polygon
        positions={block.positions}
        color={getBlockColor(block)} key={block.blockNr}
        onClick={() => null}
      >
        {block.tasks.length ? (
          <Popup>
            {block.tasks.map((task) => (
              <p key={task.type}>{task.type}</p>
            ))}
          </Popup>
        ) : null}
      </Polygon>
    ))
  }

  renderPlots() {
    const plots = this.props.plots // eslint gives error with destructor
    if (this.props.mapFilter.tagFilters.includes('PLOT_WITH_TASKS')) {
      return plots.map((plot) => (
        plot.tasks.length ? (
          <Marker
            position={[plot.location[0], plot.location[1]]}
            key={String(plot.block) + String(plot.plotNr)}
          >
            <Popup>
              {plot.residents.length ? (
                plot.residents.map((resident, index) => (
                  <p key={index}>{resident}</p>
                ))
              ) : UNOCCUPIED}
              {plot.tasks.map((task) => (
                <p key={task}>{task}</p>
              ))}
            </Popup>
          </Marker>
        ) : null
      ))
    }
    return plots.map((plot) => (
      <Marker
        position={[plot.location[0], plot.location[1]]}
        key={String(plot.block) + String(plot.plotNr)}
      >
        { plot.residents || plot.tasks.length ? (
          <Popup>
            {plot.residents.length ? (
              plot.residents.map((resident, index) => (
                <p key={index}>{resident}</p>
              ))
            ) : UNOCCUPIED}
            {plot.tasks.map((task) => (
              <p key={task}>{task}</p>
            ))}
          </Popup>
        ) : null }
      </Marker>
    ))
  }

  render() {
    const { accessToken, lat, lon } = this.props.map
    const position = [lat, lon]
    return (
      <Map
        center={position}
        onClick={this.handleClick}
        onZoomend={(ev) => {
          this.props.dispatch({
            type: MAP_SET_ZOOM_LEVEL,
            zoomLevel: ev.target._zoom,
          })
        }}
        {...this.props.map}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          id="mapbox.streets"
          accessToken={accessToken}
        />
        <Circle center={position} radius={3}>
          <Popup>
            You are<br />here.
          </Popup>
        </Circle>
        {this.renderBlocks()}
        {this.renderPlots()}
      </Map>
    )
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  const { country, city, cemetery } = state.chosenCemetery
  const { map, mapFilter } = state

  const blocks = Object.entries(state.cemeteries[country][city][cemetery]).map((block) => (
    new Block({
      country, city, cemetery,
      positions: block[1].positions,
      tasks: block[1].tasks,
      blockNr: block[0],
    })
  ))

  const plots = plotsSelector(state)

  return {
    map,
    mapFilter,
    blocks,
    plots,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CemeteryMap)

