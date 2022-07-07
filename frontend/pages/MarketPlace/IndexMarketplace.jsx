/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React, { useContext, useEffect, useState } from 'react'
import {
  login,
  logout,
  nft_tokens,
  get_sales_by_nft_contract_id,
  nft_tokens_for_owner,
  storage_minimum_balance,
  storage_deposit,
  nft_approve,
  nft_mint,
  offer,
} from '../../assets/js/near/utils'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import useModal from '../../utils/useModal'
import Modal from '../../components/Modal'

import '../../assets/css/app.css'

import getConfig from '../../assets/js/near/config'

import * as nearAPI from 'near-api-js'

import { Link } from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import Section from './Section'
import ThemeContext from '../../utils/useContextTheme'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

// import Home from "../pages/Home";

const initialValues = {
  assetTitle: '',
  assetDescription: '',
  assetUrl: '',
  assetPrice: '',
  assetBid: '',
}

// const walletConnection = window.walletConnection

function Marketplace() {
  const {
    utils: {
      format: { parseNearAmount },
    },
  } = nearAPI

  const [showLoader, setShowLoader] = useState(false)

  const [values, setValues] = useState(initialValues)

  const config = getConfig(process.env.NODE_ENV || 'development')

  const currentUser = window.accountId || ''

  const { isVisibleBid, toggleBidModal } = useModal()

  const [nftMarketResults, setNftMarketResults] = useState([])

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    loadSaleItems()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const loadSaleItems = async () => {
    const nftTokens = await nft_tokens('0', 64)

    const saleTokens = await get_sales_by_nft_contract_id(config.contractName)

    const sales = []

    nftTokens.forEach((nftToken, i) => {
      const { token_id } = nftToken
      const saleToken = saleTokens.find(({ token_id: t }) => t === token_id)
      if (saleToken) {
        sales[i] = Object.assign(nftToken, saleToken)
      }
    })

    setNftMarketResults(sales)
    setShowLoader(true)
  }

  const OfferPrice = async (token_id) => {
    await offer(
      config.contractName,
      token_id,
      parseNearAmount(values.assetBid),
      config.GAS,
    )
  }

  return (
    <div className="mt-5">
      <Section />
    </div>
    // <div>
    //   <header className="" style={{ marginTop: `${100}px` }}>
    //     Marrket Place
    //   </header>

    //   <div className="market-wrapper">
    //     <div className="market-inner-wrapper">
    //       {nftMarketResults.length !== 0 ? (
    //         <div className="market-header">
    //           <h1>Market Place</h1>
    //         </div>
    //       ) : null}

    //       <div className="market-result-wrapper">
    //         {nftMarketResults?.length
    //           ? nftMarketResults.map((nft, index) => (
    //               <div className="outter-wrapper" key={nft}>
    //                 <Modal
    //                   isVisibleBid={isVisibleBid}
    //                   hideModal={toggleBidModal}
    //                 >
    //                   <div className="form-wrapper">
    //                     <form
    //                       onSubmit={(e) => {
    //                         e.preventDefault()
    //                         OfferPrice(nft.token_id)
    //                       }}
    //                     >
    //                       <div className="form-in-wrapper">
    //                         <h3 className="text-center pb-1">BID</h3>

    //                         <div className="box-wrapper">
    //                           <div className="box-in-wrapper">
    //                             <div className="input-wrapper">
    //                               <input
    //                                 className="input-box"
    //                                 placeholder="Add bid price"
    //                                 name="assetBid"
    //                                 type="text"
    //                                 value={values.assetBid}
    //                                 onChange={handleInputChange}
    //                               />
    //                             </div>
    //                           </div>
    //                         </div>

    //                         <div className="form-btn-wrapper">
    //                           <button type="button" className="form-btn">
    //                             Enter Bid
    //                           </button>
    //                         </div>
    //                       </div>
    //                     </form>
    //                   </div>
    //                 </Modal>

    //                 <article className="card-wrapper">
    //                   <p className="asset-anchor" href="#">
    //                     <div className="asset-anchor-wrapper">
    //                       <div className="asset-anchor-wrapper-inner">
    //                         <div className="asset-anchor-wrapper-inner-2">
    //                           <img
    //                             src={nft.metadata.media}
    //                             className="img-wrapper"
    //                             alt="NFT Token"
    //                           />
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="details-wrapper">
    //                       <div className="details-title-wrapper">
    //                         <div className="details-title-left-wrapper">
    //                           <div className="details-title-left-wrapper-inner-1">
    //                             {nft.token_id}
    //                           </div>
    //                           <div className="details-title-left-wrapper-inner-2">
    //                             {nft.owner_id}
    //                           </div>
    //                         </div>
    //                         <div className="details-title-right-wrapper">
    //                           <div className="details-assets-right-wrapper-inner-1">
    //                             <span className="span-price">Price</span>
    //                             <div className="price-wrapper">
    //                               <div className="near-symbol">
    //                                 {/* <img
    //                           className="near-logo"
    //                           src={nearLogo}
    //                           alt="near logo"
    //             /> */}
    //                               </div>
    //                               <div className="price">
    //                                 {nft.sale_conditions}
    //                               </div>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </p>

    //                   <div className="sell-wrapper">
    //                     {currentUser !== nft.owner_id ? (
    //                       <button
    //                         type="button"
    //                         className="form-btn"
    //                         onClick={toggleBidModal}
    //                       >
    //                         Bid
    //                       </button>
    //                     ) : null}
    //                   </div>
    //                 </article>
    //               </div>
    //             ))
    //           : 'Market NFTs not found'}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Marketplace
