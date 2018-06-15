import React, { Component } from 'react'
import { Circle, Map, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

import Block from '../utils/block'
import { MODAL_TOGGLE } from '../actions/types'


const colors = ['green', 'red', 'yellow']
const getRandomColor = () => (
  colors[Math.floor(Math.random() * colors.length)]
)

class CemeteryMap extends Component {
  handleClick = (ev) => {
    const latLon = [ev.latlng.lat, ev.latlng.lng]
    console.log(latLon) // eslint-disable-line no-console
    return latLon
  }

  renderBlocks() {
    return this.props.blocks.map((block) => (
      <Polygon
        positions={block.coordinates}
        color={getRandomColor()} key={block.blockNr}
        onClick={() => {
          /*
          this.props.dispatch({
            type: MODAL_TOGGLE,
            visible: true,
          })
          */
        }}
      />
    ))
  }

  renderPlots() {
    return Object.entries(this.props.plots).map((plot) => (
      <Marker position={[plot[1][0], plot[1][1]]} key={String(plot[1][0]) + String(plot[1][1])}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
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
        viewport={{}}
        {...this.props.map}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          id="mapbox.streets"
          accessToken={accessToken}
        />
        <Circle center={position} radius={5}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
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
  return {
    map: state.map,
    blocks: Object.entries(state.cemeteries[country][city][cemetery]).map((e) => (
      new Block({
        country, city, cemetery,
        coordinates: e[1],
        blockNr: e[0],
      })
    )) || [],
    plots: state.plots[country][city][cemetery],
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CemeteryMap)

