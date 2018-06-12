import { SET_LOCATION } from '../actions/types'

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
      return Object.assign({}, state, {
        lat: typeof lat === 'number' ? lat : initialLat,
        lon: typeof lon === 'number' ? lon : initialLon,
        zoom: typeof zoom === 'number' ? zoom : initialZoom,
      })
    default:
      return state
  }
}

