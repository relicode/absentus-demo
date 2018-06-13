import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'


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
      <Map center={position} zoom={zoom} onClick={this.handleClick}>
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
      </Map>
    )
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  return {
    map: state.map,
  }
}

export default connect(mapStateToProps)(CemeteryMap)

