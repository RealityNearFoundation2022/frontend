/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import {
  login,
  nft_tokens_for_owner,
  nft_approve,
  nft_mint,
} from '../../assets/js/near/utils'

import useModal from '../../utils/useModal'
import Modal from '../../components/Modal'

import '../../assets/css/app.css'

import getConfig from '../../assets/js/near/config'

import * as nearAPI from 'near-api-js'

import { Link } from 'react-router-dom'

const initialValues = {
  assetTitle: '',
  assetDescription: '',
  assetUrl: '',
  assetPrice: '',
  assetBid: '',
}

function NftMe() {
  const {
    utils: {
      format: { parseNearAmount },
    },
  } = nearAPI

  const [showLoader, setShowLoader] = useState(false)

  const [values, setValues] = useState(initialValues)

  const config = getConfig(process.env.NODE_ENV || 'development')

  const currentUser = window.accountId || ''

  const { isVisible, isVisibleSale, toggleModal, toggleSaleModal } = useModal()

  const [nftResults, setNftResults] = useState([])

  useEffect(() => {
    if (!showLoader) {
      if (currentUser != '') displayAllNFT()
    }
  }, [showLoader])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const mintAssetToNft = async () => {
    toggleModal()

    let fcr = await nft_mint(
      `${values.assetTitle}`,
      `${values.assetDescription}`,
      `${values.assetUrl}`,
      config.GAS,
      currentUser,
      parseNearAmount('1'),
    )

    if (fcr) {
      console.log('nft created: ')
    } else {
      console.log('nft not created')
    }
  }

  const approveNFTForSale = async (token_id) => {
    // sendStorageDeposit();

    let sale_conditions = {
      sale_conditions: values.assetPrice,
    }

    await nft_approve(
      token_id,
      config.contractMarketplace,
      sale_conditions,
      parseNearAmount('0.01'),
    )
  }

  const displayAllNFT = async () => {
    let userNFTs = await nft_tokens_for_owner(currentUser, '0', 64)

    setNftResults(userNFTs)
    setShowLoader(true)
  }

  // const sendStorageDeposit = async () => {
  //   getMinimumStorage()

  //   console.log(minimum)

  //   await storage_deposit(currentUser, minimum, config.GAS)
  // }

  // const getMinimumStorage = async () => {
  //   let minimum_balance = await storage_minimum_balance()

  //   setMinimum(minimum_balance)
  // }

  return (
    <div style={{ marginTop: 100 + 'px' }}>
      <header className="" style={{ marginTop: 100 + 'px' }}>
        <div className="menu">
          <div className="navbar-left">
            <h3>Your NFT</h3>
          </div>

          <div className="navbar-right">
            <Link to={'/marketplace'}>Go Back Marketplace</Link>
          </div>

          {currentUser ? (
            <div className="navbar-li">
              <button className="btn" onClick={toggleModal}>
                Create NFT
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <main className="main-wrapper">
        <div className="wrapper">
          {currentUser ? (
            <div className="welcome-wrapper">
              <span className="welcome-text">Welcome! </span>
              {currentUser}
            </div>
          ) : (
            <div>
              <p>user not logged in </p>
              <button className="btn btn-primary btn-xl" onClick={login}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </main>

      <div className="gallery-wrapper">
        {nftResults
          ? nftResults.map((nft, index) => (
              <div className="outter-wrapper" key={index}>
                <Modal
                  isVisibleSale={isVisibleSale}
                  hideModal={toggleSaleModal}
                >
                  <div className="outform-wrapper">
                    <div className="form-wrapper">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          approveNFTForSale(nft.metadata.title)
                        }}
                      >
                        <div className="form-in-wrapper">
                          <h3 className="text-center pb-1">SELL NFT</h3>

                          <div className="box-wrapper">
                            <div className="box-in-wrapper">
                              <div className="input-wrapper">
                                <input
                                  className="input-box"
                                  placeholder="Add sale price"
                                  name="assetPrice"
                                  type="text"
                                  value={values.assetPrice}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-btn-wrapper">
                            <button className="form-btn">Sell now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal>
                <article className="card-wrapper">
                  <a className="asset-anchor" href="#">
                    <div className="asset-anchor-wrapper">
                      <div className="asset-anchor-wrapper-inner">
                        <div className="asset-anchor-wrapper-inner-2">
                          <img
                            src={nft.metadata.media}
                            className="img-wrapper"
                            alt="NFT Token"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="details-wrapper">
                      <div className="details-title-wrapper">
                        <div className="details-title-left-wrapper">
                          <div className="details-title-left-wrapper-inner-1">
                            {nft.metadata.title}
                          </div>
                          <div className="details-title-left-wrapper-inner-2">
                            {nft.owner_id}
                          </div>
                        </div>
                        <div className="details-title-right-wrapper">
                          <div className="details-assets-right-wrapper-inner-1">
                            <span className="span-price">Price</span>
                            <div className="price-wrapper">
                              <div className="near-symbol">
                                {/*<img
                          className="near-logo"
                          src={nearLogo}
                          alt="near logo"
                        />*/}
                              </div>
                              <div className="price">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sell-wrapper">
                      <button className="form-btn" onClick={toggleSaleModal}>
                        Sell now
                      </button>
                    </div>
                  </a>
                </article>
              </div>
            ))
          : 'NFTs not found'}
      </div>

      <Modal isVisible={isVisible} hideModal={toggleModal}>
        <div className="outform-wrapper">
          <div className="form-wrapper">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                mintAssetToNft()
              }}
            >
              <div className="form-in-wrapper">
                <h3 className="text-center pb-1">MINT NFT</h3>

                <div className="box-wrapper">
                  <div className="box-in-wrapper">
                    <div className="input-wrapper">
                      <input
                        className="input-box"
                        placeholder="Asset Title"
                        name="assetTitle"
                        type="text"
                        value={values.assetTitle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="box-in-wrapper">
                    <div className="input-wrapper">
                      <input
                        className="input-box"
                        placeholder="Asset Description"
                        name="assetDescription"
                        type="text"
                        value={values.assetDescription}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="box-in-wrapper">
                    <div className="input-wrapper">
                      <input
                        className="input-box"
                        placeholder="Asset Url"
                        name="assetUrl"
                        type="text"
                        value={values.assetUrl}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-btn-wrapper">
                  <button className="form-btn">Mint NFT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default NftMe
