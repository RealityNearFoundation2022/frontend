/* eslint-disable prettier/prettier */
export const tokenMapBox =
  'pk.eyJ1IjoicmVhbGl0eS1uZWFyLWRldnMiLCJhIjoiY2wzejY1Zm1tMXV1MTNicDRtZzViazRsNSJ9.Br1q0_qFPtNqIr59i-MqIA'
const PARCEL_SIZE = 0.001;
const VERTICAL = {
  positive: 1,
  negative: 0.7
}


export const coordinatesGeojson = (lat,lng) => {
  // VERTICAL POSITIVE
  const coord =   []
  // const parcelV = {
  //   positive:VERTICAL.positive/PARCEL_SIZE,
  //   negative:VERTICAL.negative/PARCEL_SIZE,
  // };
  // for(j = 0; j < 20; j +=1) {
  for (let i = 0; i < 20; i += 1) {
    const geojson =    {
      type: 'Feature',
      id: `geojson${i}`,
      properties: {
        value: 0.2523820479083345,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [lat, lng+(i*PARCEL_SIZE)],
          [lat+PARCEL_SIZE, lng+(i*PARCEL_SIZE)],
          [lat+PARCEL_SIZE, lng+((i+1)*PARCEL_SIZE)],
          [lat,lng+((i+1)*PARCEL_SIZE)],
        ]
      },
    }
    coord.push(geojson)
  // }
  }
  return coord;
}
