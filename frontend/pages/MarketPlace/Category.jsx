/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from './Card'
export function Category({ dataCategory }) {
  console.log(dataCategory)
  const currentItemsCategory = [...dataCategory.itemCards]
  const [currentData, setCurrentData] = useState(currentItemsCategory)

  const searchData = (condition, value) =>
    currentItemsCategory.filter((item) =>
      item[condition].toLowerCase().includes(value.toLowerCase()),
    )
  // Buscador de  cards
  const searchCard = (e) => {
    console.log(e.target.value)
    setCurrentData(searchData('titleItem', e.target.value))
  } // falta averiguar el search, el value se queda del final o....useEffect?
  return (
    <div className="">
      <input
        type="search"
        id="searchCard"
        placeholder="Search"
        onKeyUp={searchCard}
      />
      <h1>{dataCategory.title}</h1>
      <div className="d-flex flex-sm-wrap">
        {currentData.map((item) => (
          <div className="w-25">
            <Card elementsCard={item} category={dataCategory.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
