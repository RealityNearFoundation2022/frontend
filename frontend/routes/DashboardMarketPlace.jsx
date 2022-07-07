import Grid from '@mui/material/Grid'
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { CardSection } from '../pages/MarketPlace/CardSection'
import { Category } from '../pages/MarketPlace/Category'
import { filtersMarketplace } from '../pages/MarketPlace/Data_Categories/Categories'
import Filter from '../pages/MarketPlace/Filter'
import Header from '../pages/MarketPlace/Header'
import Marketplace from '../pages/MarketPlace/IndexMarketplace'
import ThemeContext from '../utils/useContextTheme'
// import PruebaCategory from '../pages/MarketPlace/PruebaCategory'
export function DashboardMarketPlace() {
  const dataCategories = [...filtersMarketplace]
  const categories = [
    'Novedades',
    'Ofertas',
    'NFTs',
    'Realands',
    'Patchas',
    'Otros',
  ]
  console.log(dataCategories)
  const { theme } = useContext(ThemeContext)

  const findCategory = (condition) => {
    const finded = dataCategories.filter((item) => item.title === condition)[0]
    console.log(finded)
    return finded
  }
  return (
    <div className={`${theme.bg} mt-5 w-100`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={4}>
          <Filter />
        </Grid>
        <Grid item xs={8}>
          <Routes>
            {categories.map((category) => (
              <>
                <Route
                  path={`marketplace/${category.toLowerCase()}`}
                  element={<Category dataCategory={findCategory(category)} />}
                />
                **
              </>
            ))}
            <Route path="marketplace" element={<Marketplace />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  )
}
