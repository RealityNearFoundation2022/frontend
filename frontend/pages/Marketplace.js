import React, { useEffect, useState } from "react";
import {
    login, logout, nft_tokens, get_sales_by_nft_contract_id, nft_tokens_for_owner,
    storage_minimum_balance, storage_deposit, nft_approve, nft_mint, offer } from '../assets/js/near/utils'

import useModal from "../utils/useModal";
import Modal from "../components/Modal";


import '../assets/css/app.css'

import getConfig from '../assets/js/near/config'

import * as nearAPI from "near-api-js";

import { Link, Route } from 'react-router-dom';



//import Home from "../pages/Home";


const initialValues = {
    assetTitle: "",
    assetDescription: "",
    assetUrl: "",
    assetPrice: "",
    assetBid: "",
  };

// const walletConnection = window.walletConnection

const Marketplace = () => {

    const {
        utils: {
          format: { parseNearAmount },
        },
    } = nearAPI;

    const [showLoader, setShowLoader] = useState(false);
  
    const [values, setValues] = useState(initialValues);

    const config = getConfig(process.env.NODE_ENV || 'development')

    const currentUser = window.accountId || ""

    console.log(currentUser)

    const {
        isVisibleBid,
        toggleBidModal,
    } = useModal();
    
    const [nftMarketResults, setNftMarketResults] = useState([]);

    useEffect(() => {
        if (!showLoader) {
            loadSaleItems();
        }
    }, [showLoader]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };
    
    const loadSaleItems = async () => {

        let nftTokens = await nft_tokens("0", 64)
    
        let saleTokens = await get_sales_by_nft_contract_id(config.contractName)
        
        let sales = [];
        
        for (let i = 0; i < nftTokens.length; i++) {
          const { token_id } = nftTokens[i];
          let saleToken = saleTokens.find(({ token_id: t }) => t === token_id);
          if (saleToken !== undefined) {
            sales[i] = Object.assign(nftTokens[i], saleToken);
          }
        }
        setNftMarketResults(sales);
        setShowLoader(true);
    };

    const OfferPrice = async (token_id) => {
        await offer(config.contractName, token_id, parseNearAmount(values.assetBid), config.GAS)
    }

    return (
        <div>
          <header className="" style={{marginTop:100 + 'px'}}>
            <div className="menu">

              <div className="navbar-left">
                <h3> NFT MARKET</h3>
              </div>

              {currentUser ? (
              <div className="navbar-right">
                <span className="welcome-text">Welcome! </span>
                {currentUser}
              </div>
              ): null}

              <div className="navbar-right">
                <Link to={"/marketplace/me"}>Go your NFT</Link>
              </div>

            </div>
          </header>

          {/*<Link to={`/marketplace/sell`}>Sell</Link>*/}
          


         {/* <main className="main-wrapper">
            <div className="wrapper">
              {currentUser ? (
                <div className="welcome-wrapper">
                  <span className="welcome-text">Welcome! </span>
                  {currentUser}
                </div>
              ) : (
                <div>
                  <p>user not logged in </p>
                  <button onClick={login}>Sign in</button>
                </div>
              )}


            </div>
          </main> */}

<div className="market-wrapper">
<div className="market-inner-wrapper">
  {nftMarketResults.length !== 0 ? (
    <div className="market-header">
      <h1>Market Place</h1>
    </div>
  ) : null}

  <div className="market-result-wrapper">
    {nftMarketResults
      ? nftMarketResults.map((nft, index) => (
          <div className="outter-wrapper" key={index}>

            <Modal
              isVisibleBid={isVisibleBid}
              hideModal={toggleBidModal}
            >
              <div className="outform-wrapper">
                <div className="form-wrapper">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      OfferPrice(nft.token_id);
                    }}
                  >
                    <div className="form-in-wrapper">
                      <h3 className="text-center pb-1">BID</h3>

                      <div className="box-wrapper">
                        <div className="box-in-wrapper">
                          <div className="input-wrapper">
                            <input
                              className="input-box"
                              placeholder="Add bid price"
                              name="assetBid"
                              type="text"
                              value={values.assetBid}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-btn-wrapper">
                        <button className="form-btn">Enter Bid</button>
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
                        {nft.token_id}
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
                          <div className="price">
                            {nft.sale_conditions}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <div className="sell-wrapper">
                {currentUser != nft.owner_id ? (
                  <button className="form-btn" onClick={toggleBidModal}>
                    Bid
                  </button>
                ) : null}
              </div>


            </article>


          </div>
        ))
      : "Market NFTs not found"}
  </div>
</div>
</div>



    

    

        </div>
      );
  };
  
  export default Marketplace;
  