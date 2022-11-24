/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from './Card'
import NoData from '../ErrorPage/NoData'

export function Category({ dataCategory }) {
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
    <div className="w-100 mt-5">
      <input
        type="search"
        id="searchCard"
        placeholder="Search"
        className="p-2 w-90 search"
        onKeyUp={searchCard}
      />
      <h1 className="mt-3 text-primary">{dataCategory.title}</h1>
      <div className="d-flex flex-sm-wrap gap-3">
        {currentData.map((item) => (
          <div className="w-30" key={item}>
            <Card elementsCard={item} category={dataCategory.title} />
          </div>
        ))}
        <div className={`${currentData.length === 0 ? '': 'd-none'}`}>
          <NoData/>
        </div>
      </div>
    </div>
  )
}
