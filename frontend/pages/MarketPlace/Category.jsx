/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from './Card'
import NoData from '../ErrorPage/NoData'
import { useTranslation } from 'react-i18next'

export function Category({ dataCategory }) {
  const currentItemsCategory = dataCategory ? [...dataCategory.itemCards] : []
  const [currentData, setCurrentData] = useState(currentItemsCategory)
  const { t } = useTranslation()

  const searchData = (condition, value) =>
    currentItemsCategory.filter((item) =>
      item[condition].toLowerCase().includes(value.toLowerCase()),
    )
  // Buscador de  cards
  const searchCard = (e) => {
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
      <h1 className="mt-3 text-primary"> {t(dataCategory?.title)}</h1>
      {currentData.length ? (
        <div className="d-flex flex-sm-wrap gap-3">
          {currentData.map((item) => (
            <div className="w-30" key={item}>
              <Card elementsCard={item} category={dataCategory?.title} />
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  )
}
