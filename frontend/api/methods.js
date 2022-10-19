require('dotenv').config()
const api = process.env.REACT_APP_API

export const getData = async (endpoint) => {
  const response = await fetch(`${api}/api/v1/${endpoint}`)
  const data = response.json()
  return data
}
