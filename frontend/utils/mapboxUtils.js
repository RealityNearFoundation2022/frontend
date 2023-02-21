require('dotenv').config()
export const tokenMapBox = process.env.REACT_APP_MAPBOX_KEY
const PARCEL_SIZE = 0.001

export const coordinatesGeojson = (lat, lng) => {
  const coord = []
  for (let i = 0; i < 20; i += 1) {
    const geojson = {
      type: 'Feature',
      id: `geojson${i}`,
      properties: {
        value: 0.2523820479083345,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [lat, lng + i * PARCEL_SIZE],
          [lat + PARCEL_SIZE, lng + i * PARCEL_SIZE],
          [lat + PARCEL_SIZE, lng + (i + 1) * PARCEL_SIZE],
          [lat, lng + (i + 1) * PARCEL_SIZE],
        ],
      },
    }
    coord.push(geojson)
  }
  return coord
}
