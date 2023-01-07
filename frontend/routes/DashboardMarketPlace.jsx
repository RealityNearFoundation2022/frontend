/* eslint-disable camelcase */
import Grid from '@mui/material/Grid'
import { element } from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { nft_tokens, get_tokens, viewMethod, nearConfig, get_sales_by_nft_contract_id, get_number_of_tokens } from '../assets/js/near/utils'
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

  const currentUser = window.accountId || ''

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
    const arrayNFT = [];
  
    const promises = symbols.map(async (e, i) => {
      let contractId = `${e.symbol.toLowerCase()}.${nearConfig.contractFactoryNFT}`;
      let args = { from_index: '0', limit: 10 };
  
      try {
        let d = await viewMethod({ contractId, method: 'nft_tokens', args });
        arrayNFT.push(d[0]);
      } catch (error) {
        console.error(error);
      }
    });
  
    await Promise.all(promises);
  
    return arrayNFT;
  }

  useEffect(() => {
    async function fetchList() {
      // novedades
      const resultNovelties = []
      // ofertas
      const resultOferts = []
      // nft
      const resultNfts = []

      const misRealands = []

      /* Trae la data del contrato en un array de objetos */
      const listMenu = await nft_tokens('0', 20)

      // const number = await get_sales_by_nft_contract_id()

      //const number = get_number_of_tokens();

      const factTokens = await getAllTokens()// await get_tokens(0, 100)

      /**
       * recorre cada token y de la metadata extrae el symbol y crea un llamado a nft_tokens de ese contrato junto con el nftcontract 
       * y extrae el owner_id
       */

      const symbols = factTokens.map((e) => ({
        symbol: e.metadata.symbol,
      }))

      console.log('aquiiiii')

      console.log(factTokens);

      console.log(symbols)

      // const arrayNFT = [];
      // 
      // await symbols.forEach(async (e, i) => {
      //   //let d = viewMethod(e.symbol.toLowerCase()+'.'+nearConfig.contractFactoryNFT, 'nft_tokens');
      //   let contractId = e.symbol.toLowerCase()+'.'+nearConfig.contractFactoryNFT;
      //   
      //   console.log(contractId)
      //   let args = {"from_index":'0', "limit": 10} //{"account_id": currentUser}
      //   console.log(args)
// 
      //   try{
      //   let d = await viewMethod({contractId, method: 'nft_tokens', args})
      //   console.log(d[0])
// 
      //   arrayNFT.push(d[0]);
      //   } catch (e) {
      //     console.log(e)
      //   }
      // 
      // })
// 
      // console.log(arrayNFT)

      const arrayNFT = await getNFTTokens(symbols)
      
      console.log(arrayNFT)


     const nfts = arrayNFT.map((e)=>({
          price: e.metadata.price,
          description: e.metadata.description,
          titleItem: e.metadata.title,
          img: e.metadata.media,
          author: e.owner_id,
          id: e.token_id,         
     }))
     
     console.log(nfts);

     const nftsFilter = nfts.filter(item => item.author == currentUser)

     console.log(nftsFilter);

      // recorre los nft del contrato
      const data = listMenu.map((e) => ({
        ...e.metadata,
        author: e.owner_id,
        id: e.token_id,
      }))
      
      // Extrae los nft y los reparte por indice # Esto no es necesario se debe cambiar a otro metodo
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

      /**
       * solo necesitamos
       * marketplace
       * realands
       * patchas
       * misrealands
       */
      const result = [
        { id: 1, title: 'Novedades', itemCards: resultNovelties },
        { id: 2, title: 'Ofertas', itemCards: resultOferts },
        { id: 3, title: 'Realands', itemCards: [] },
        { id: 4, title: 'Patchas', itemCards: [] },
        { id: 5, title: 'NFTs', itemCards: resultNfts },
        { id: 6, title: 'Otros', itemCards: [] },
        { id: 7, title: 'MisRealands', itemCards: nftsFilter },
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
    'MisRealands',
  ]

  const { theme } = useContext(ThemeContext)

  const findCategory = (condition) => {
    const finded = dataCategories.filter(
      (item) => item.title.toLowerCase() === condition.toLowerCase(),
    )[0]
    return finded
  }

  return (
    <div className={`${theme.bg} w-100`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={2} className="ps-7-5porcent">
          <Filter />
        </Grid>
        <Grid item xs={10} className="pe-7-5porcent">
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
