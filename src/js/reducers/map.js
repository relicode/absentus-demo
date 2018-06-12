import { SET_LOCATION, SET_LOCATION_ORIGINAL } from '../actions/types'

const initialLat = 60.16880318693753 // Hietaniemi Cemetery
const initialLon = 24.91838931960289 // Hietaniemi Cemetery
const initialZoom = 18

const initialState = {
  accessToken: 'pk.eyJ1IjoiYW5zc2loZXJyYW5lbiIsImEiOiJjamkxand2dG8wbG9uM3FwaWtzMmcweXF4In0.wMtJBkK3g1ZuSzg7gaXPDw',
  lat: initialLat,
  lon: initialLon,
  zoom: initialZoom,
}

export default function map(state = initialState, action) {
  const { type, location } = action
  const { lat, lon, zoom } = typeof location === 'object' ? location : {}
  switch (type) {
    case SET_LOCATION:
      return {
        ...state,
        lat,
        lon,
        zoom,
      }
    case SET_LOCATION_ORIGINAL:
      return {
        ...state,
        lat: initialLat,
        lon: initialLon,
        zoom: initialZoom,
      }
    default:
      return state
  }
}

