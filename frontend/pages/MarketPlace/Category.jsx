/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from './Card'
export function Category({ currentItemsCategory }) {
  const [currentData, setCurrentData] = useState([...currentItemsCategory])

  const searchData = (condition, value) =>
    currentData.filter((item) =>
      item[condition].toLowerCase().includes(value.toLowerCase()),
    )
  // Buscador de  cards
  const searchMovie = (e) => {
    console.log(e.target.value)
    setCurrentData(searchData('titleItem', e.target.value))
  } // falta averiguar el search, el value se queda del final o....useEffect?
  return (
    <div>
      <input
        type="search"
        id="searchMovie"
        placeholder="Search"
        onKeyUp={searchMovie}
      />
      <div>
        {currentData.map((item) => (
          <Card elementsCard={item} />
        ))}
      </div>
    </div>
  )
}
