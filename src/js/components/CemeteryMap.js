import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'


class CemeteryMap extends Component {
  constructor() {
    super()
    this.state = {
      accessToken: 'pk.eyJ1IjoiYW5zc2loZXJyYW5lbiIsImEiOiJjamkxand2dG8wbG9uM3FwaWtzMmcweXF4In0.wMtJBkK3g1ZuSzg7gaXPDw',
      lat: 60.16880318693753, // Hietaniemi Cemetery
      lon: 24.91838931960289, // Hietaniemi Cemetery
      zoom: 18,
    }
    setInterval(() => {
      // this.setState({zoom: this.state.zoom - 1})
    }, 1000)
  }

  render() {
    const { accessToken, lat, lon, zoom } = this.props.map
    const position = [lat, lon]
    return (
      <Map center={position} zoom={zoom} onClick={this.handleClick.bind(this)}>
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

  handleClick(ev) {
    const latLon = [ev.latlon.lat, ev.latlon.lng]
    return latLon
    // console.log([lat, lon]) // For development
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  return {
    map: state.map,
  }
}

export default connect(mapStateToProps)(CemeteryMap)

