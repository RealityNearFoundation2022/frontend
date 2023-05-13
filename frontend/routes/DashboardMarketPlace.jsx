/* eslint-disable camelcase */
import Grid from '@mui/material/Grid'
// import { element } from "prop-types";
import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  // nft_tokens,
  get_tokens,
  viewMethod,
  nearConfig,
  get_sales_by_nft_contract_id,
  get_number_of_tokens,
} from '../assets/js/near/utils'
import { useNavigate } from 'react-router-dom'
import LoadingModal from '../components/LoadingModal'
import { Category } from '../pages/MarketPlace/Category'
// import { filtersMarketplace } from '../pages/MarketPlace/Data_Categories/Categories'
import Filter from '../pages/MarketPlace/Filter'
import Header from '../pages/MarketPlace/Header'
// import Marketplace from "../pages/MarketPlace/IndexMarketplace";
import ThemeContext from '../utils/useContextTheme'
// import PruebaCategory from '../pages/MarketPlace/PruebaCategory'

export function DashboardMarketPlace() {
  // const dataCategories = [...filtersMarketplace]
  const [dataCategories, setCategories] = useState([])
  const [profileCategories, setProfileCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const currentUser = window.accountId || ''
  const navigate = useNavigate()

  const myProfileCategories = [
    {
      name: 'Mis NFTs',
      url: '/marketplace/my-nfts',
      path: 'my-nfts',
      itemCards: [],
    },
    {
      name: 'Mis tierras',
      url: '/marketplace/my-lands',
      path: '/my-lands',
      itemCards: [],
    },
  ]
  const categories = [
    {
      name: 'Marketplace',
      url: '/marketplace',
      path: '/',
      itemCards: [],
    },
    {
      name: 'Realands',
      url: '/nuruk',
      path: 'realands',
      itemCards: [],
    },
    {
      name: 'Patchas',
      url: '/patchas',
      path: 'patchas',
      itemCards: [],
    },
  ]

  /**
   * Sets the `itemCards` property of a category to the given data.
   *
   * @param {string} category - The name of the category to set the `itemCards` property for.
   * @param {array} data - The data to set the `itemCards` property to.
   *
   * @example
   * const data = [{ name: 'Item 1' }, { name: 'Item 2' }];
   * setCategory('Marketplace', data);
   */
  function setCategory(category, data) {
    if (category === myProfileCategories[0].name) {
      myProfileCategories.forEach((cat) => {
        if (cat.name === category) {
          cat.itemCards = data
        }
      })
    } else if (category === categories[0].name) {
      categories.forEach((cat) => {
        if (cat.name === category) {
          cat.itemCards = data
        }
      })
    }
  }

  /**
   * Returns an array of all tokens.
   * @return {Promise<Array>} An array of tokens.
   */
  async function getAllTokens() {
    const number = await get_number_of_tokens()
    let factTokens = []
    for (let i = 0; i < number; i += 100) {
      const tokens = await get_tokens(i, 100)
      factTokens = [...factTokens, ...tokens]
    }
    return factTokens
  }

  /**
   * Returns an array of NFT tokens for the given symbols.
   * @param {Array} symbols - An array of symbols.
   * @return {Promise<Array>} An array of NFT tokens.
   */
  async function getNFTTokens(symbols) {
    const arrayNFT = []

    const promises = symbols.map(async (e) => {
      let contractId = `${e.symbol.toLowerCase()}.${
        nearConfig.contractFactoryNFT
      }`
      let args = { from_index: '0', limit: 10 }

      try {
        let d = await viewMethod({ contractId, method: 'nft_tokens', args })
        arrayNFT.push(d[0])
      } catch (error) {
        console.error(error)
      }
    })

    await Promise.all(promises)

    return arrayNFT
  }

  /**
   * Gets all sale tokens for the given array of symbols.
   *
   * @param {Array} symbols - An array of symbols to get sale tokens for. Each symbol should be an object with a `symbol` property.
   * @returns {Promise} A promise that resolves to an array of sale tokens. Each sale token is an object with information about a sale.
   *
   * @example
   * getSaleTokensAll([{ symbol: 'ABC' }, { symbol: 'DEF' }])
   *   .then(sales => console.log(sales))
   *   .catch(error => console.error(error));
   *
   * await getSaleTokensAll([{ symbol: 'ABC' }, { symbol: 'DEF' }])
   */
  async function getSaleTokensAll(symbols) {
    const salesMKP = []

    const promises = symbols.map(async (e, i) => {
      let contractId = `${e.symbol.toLowerCase()}.${
        nearConfig.contractFactoryNFT
      }`

      let d = await get_sales_by_nft_contract_id(contractId)
      if (d !== [null]) {
        salesMKP.push(d[0])
      }
    })

    await Promise.all(promises)
    return salesMKP.filter((e) => e !== undefined)
  }

  /**
   * Maps an array of NFTs to an array of objects with the desired properties.
   *
   * @param {array} arrayNFT - An array of NFTs.
   * @returns {array} An array of objects with the properties `price`, `description`, `titleItem`, `img`, `author`, and `id`.
   *
   * @example
   * const arrayNFT = [
   *   {
   *     metadata: {
   *       price: '100',
   *       description: 'A beautiful piece of art.',
   *       title: 'Artwork',
   *       media: 'https://example.com/artwork.jpg',
   *     },
   *     owner_id: 'alice',
   *     token_id: '123'
   *   },
   * ];
   *
   * const mappedNFTs = mapNFTs(arrayNFT);
   * console.log(mappedNFTs);
   * // Output: [
   * //   {
   * //     price: '100',
   * //     description: 'A beautiful piece of art.',
   * //     titleItem: 'Artwork',
   * //     img: 'https://example.com/artwork.jpg',
   * //     author: 'alice',
   * //     id: '123',
   * //   },
   * // ]
   */
  function mapNFTs(arrayNFT) {
    return arrayNFT.map((e) => ({
      price: e.metadata.price,
      description: e.metadata.description,
      titleItem: e.metadata.title,
      img: e.metadata.media,
      author: e.owner_id,
      id: e.token_id,
    }))
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      console.log('factTokens holi')
      setCategories(categories)
      setProfileCategories(myProfileCategories)
      const factTokens = await getAllTokens() // await get_tokens(0, 100)
      console.log('factTokens', factTokens)
      /**
       * recorre cada token y de la metadata extrae el symbol y crea un llamado a nft_tokens de ese contrato junto con el nftcontract
       * y extrae el owner_id
       */

      const symbols = factTokens.map((e) => ({
        symbol: e.metadata.symbol,
      }))

      const sales = await getSaleTokensAll(symbols)

      const symbolsSale = sales.map((e) => e.token_id)
      const arrayNFT = await getNFTTokens(symbols)
      const nfts = mapNFTs(arrayNFT.filter((e) => e))

      const nftsFilter = nfts.filter((item) => item.author === currentUser)

      const marketplace = nfts.filter((e) => symbolsSale.includes(e.id))

      const marketplacer = marketplace.map((j) => {
        let sale = sales.find((e) => e.token_id === j.id)
        j.price = sale.sale_conditions
        return j
      })
      // todo

      setCategory('Mis NFTs', nftsFilter)
      setCategory('Marketplace', marketplacer)
      setIsLoading(false)
    }

    try {
      fetchData()
    } catch (error) {
      navigate('/server-error')
    }
  }, [])

  const { theme } = useContext(ThemeContext)

  /**
   * Searches for a category in the `dataCategories` array whose title matches the
   * given condition.
   *
   * @param {string} condition - The condition to search for the category.
   * @return {Object} The found category object, or undefined if no object meets
   * the condition.
   */
  // const findCategory = (condition) => {
  //   const finded = dataCategories.filter(
  //     (item) => item.title.toLowerCase() === condition.toLowerCase()
  //   )[0];
  //   return finded;
  // };

  return (
    <div className={`${theme.bg} w-100`}>
      <LoadingModal handleClose={() => setIsLoading(false)} open={isLoading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>

        <Grid item xs={2} className="ps-7-5porcent">
          <Filter
            data={dataCategories}
            title={`${dataCategories.length ? 'MENU' : ''}`}
          />

          {myProfileCategories.length > 0 ? (
            <Filter
              data={profileCategories}
              title={`${profileCategories.length ? 'MI PERFIL' : ''}`}
            />
          ) : (
            <div></div>
          )}
        </Grid>
        <Grid item xs={10} className="pe-7-5porcent">
          {isLoading || (
            <Routes>
              {[...dataCategories, ...profileCategories].map((cat) => (
                <>
                  <Route
                    path={`${cat.path.toLowerCase()}`}
                    element={<Category dataCategory={cat} />}
                  />
                </>
              ))}
              {/* <Route path="/" element={<Marketplace symbols={dataSymbols}/>} /> */}
            </Routes>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
