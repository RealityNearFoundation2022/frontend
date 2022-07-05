/* eslint-disable prettier/prettier */
export const tokenMapBox =
  'pk.eyJ1IjoicmVhbGl0eS1uZWFyLWRldnMiLCJhIjoiY2wzejY1Zm1tMXV1MTNicDRtZzViazRsNSJ9.Br1q0_qFPtNqIr59i-MqIA'
const PARCEL_SIZE = 1;
const VERTICAL = {
  positive: 100,
  negative: 70
}


export const coordinates = () => {
  // VERTICAL POSITIVE
  const coord =   []
  const parcelV = {
    positive:VERTICAL.positive/PARCEL_SIZE,
    negative:VERTICAL.negative/PARCEL_SIZE,
  };
  for (let i = 0; i < parcelV.positive; i += 1) {
    coord.push([
      [0, 0+(i*PARCEL_SIZE)],
      [0+PARCEL_SIZE, 0+(i*PARCEL_SIZE)],
      [0+PARCEL_SIZE, 0+((i+1)*PARCEL_SIZE)],
      [0,0+((i+1)*PARCEL_SIZE)],
    ])
  }
  console.log(coord);
  return coord;
}