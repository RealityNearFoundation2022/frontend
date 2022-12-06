/* eslint-disable camelcase */
import Grid from '@mui/material/Grid'
import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { nft_tokens } from '../assets/js/near/utils'
// import { CardSection } from '../pages/MarketPlace/CardSection'
import { Category } from '../pages/MarketPlace/Category'
// import { filtersMarketplace } from '../pages/MarketPlace/Data_Categories/Categories'
import Filter from '../pages/MarketPlace/Filter'
import Header from '../pages/MarketPlace/Header'
import Marketplace from '../pages/MarketPlace/IndexMarketplace'
import ThemeContext from '../utils/useContextTheme'
// import PruebaCategory from '../pages/MarketPlace/PruebaCategory'
export function DashboardMarketPlace() {
  // const dataCategories = [...filtersMarketplace]
  const [dataCategories, setCategories] = useState([])

  useEffect(() => {
    async function fetchList() {
      /* Trae la data de Firebase en un array de objetos */
      const listMenu = await nft_tokens('0', 20)
      const data = listMenu.map((e) => ({
        ...e.metadata,
        author: e.owner_id,
        id: e.token_id,
      }))
      const resultNovelties = []
      const resultOferts = []
      const resultNfts = []
      data.forEach((element, index) => {
        // TO DO:
        // Preguntar como diferenciar los nfts novedades, ofertas, general
        if (index <= 4) {
          resultNovelties.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        } else if (index <= 9) {
          resultOferts.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        } else {
          resultNfts.push({
            id: element.id,
            author: element.author,
            img: element.media,
            titleItem: element.title,
            description: element.description,
            price: 143000,
          })
        }
      })
      const result = [
        { id: 1, title: 'Novedades', itemCards: resultNovelties },
        { id: 2, title: 'Ofertas', itemCards: resultOferts },
        { id: 3, title: 'Realands', itemCards: [] },
        { id: 4, title: 'Patchas', itemCards: [] },
        { id: 5, title: 'NFTs', itemCards: resultNfts },
        { id: 6, title: 'Otros', itemCards: [] },
      ]
      setCategories(result)
    }
    fetchList()
  }, [])
  const categories = [
    'Novedades',
    'Ofertas',
    'NFTs',
    'Realands',
    'Patchas',
    'Otros',
  ]
  const { theme } = useContext(ThemeContext)

  const findCategory = (condition) => {
    const finded = dataCategories.filter(
      (item) => item.title.toLowerCase() === condition.toLowerCase(),
    )[0]
    return finded
  }
  return (
    <div className={`${theme.bg} mt-5 w-100`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={4} className="ps-7-5porcent">
          <Filter />
        </Grid>
        <Grid item xs={8} className="pe-7-5porcent">
          <Routes>
            {categories.map((category) => (
              <>
                <Route
                  path={`${category.toLowerCase()}`}
                  element={<Category dataCategory={findCategory(category)} />}
                />
                **
              </>
            ))}
            <Route path="/" element={<Marketplace />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  )
}
