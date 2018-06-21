import React, { Component } from 'react'
import { Circle, Map, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

import Block from '../utils/block'
import Plot from '../utils/plot'
import { MAP_SET_ZOOM_LEVEL } from '../actions/types'


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
    if (this.props.map.zoom <= 18) return null
    if (this.props.mapFilter === 'PLOT_WITH_TASKS') {
      return Object.entries(this.props.plots).map((plot) => (
        plot[1].tasks.length ? (
          <Marker
            position={[plot[1].location[0], plot[1].location[1]]}
            key={String(plot[1].block) + String(plot[1].plotNr)}
          >
            <Popup>
              {plot[1].resident}
              {plot[1].tasks.map((task) => (
                <p key={task}>{task}</p>
              ))}
            </Popup>
          </Marker>
        ) : null
      ))
    }
    return Object.entries(this.props.plots).map((plot) => (
      <Marker
        position={[plot[1].location[0], plot[1].location[1]]}
        key={String(plot[1].block) + String(plot[1].plotNr)}
      >
        { plot[1].resident || plot[1].tasks.length ? (
          <Popup>
            {plot[1].resident}
            {plot[1].tasks.map((task) => (
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
  const blocks = Object.entries(state.cemeteries[country][city][cemetery]).map((block) => (
    new Block({
      country, city, cemetery,
      positions: block[1].positions,
      tasks: block[1].tasks,
      blockNr: block[0],
    })
  ))
  const plots = Object.entries(state.cemeteries[country][city][cemetery]).map((block) => (
    Object.entries(block[1].plots).map((plot) => {
      return new Plot({
        ...plot[1],
        plotNr: plot[0],
        block: block[0],
      })
    })
  )).reduce((prev, curr) => (
    prev.concat(curr)
  ))

  return {
    map: state.map,
    mapFilter: state.mapFilter,
    blocks,
    plots,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CemeteryMap)

