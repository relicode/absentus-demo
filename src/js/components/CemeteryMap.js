import React, { Component } from 'react'
import { Map, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
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

  render() {
    const { accessToken, lat, lon, zoom } = this.props.map
    const position = [lat, lon]
    return (
      <Map center={position} zoom={zoom} onClick={this.handleClick} viewport={{}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          id="mapbox.streets"
          accessToken={accessToken}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {this.props.blocks.map((block) => (
          <Polygon
            positions={block.coordinates}
            color={getRandomColor()} key={block.blockNr}
            onClick={() => {
              this.props.dispatch({
                type: MODAL_TOGGLE,
                visible: true,
              })
            }}
          />
        ))}
      </Map>
    )
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  const { country, city, cemetery } = state.chosenCemetery
  return {
    map: state.map,
    blocks: state.cemeteries[country][city][cemetery].map((b) => (
      new Block({
        country, city, cemetery,
        coordinates: b,
        blockNr: Math.floor(Math.random() * 5000) + 1 // horrible hack, TODO: fix this
      })
    )) || []
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CemeteryMap)

