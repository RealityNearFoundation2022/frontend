import React, { useEffect, useState } from "react";
import {
    login, logout, nft_tokens, get_sales_by_nft_contract_id, nft_tokens_for_owner,
    storage_minimum_balance, storage_deposit, nft_approve, nft_mint, offer } from '../assets/js/near/utils'

import useModal from "../utils/useModal";
import Modal from "../components/Modal";

import getConfig from '../assets/js/near/config'

import * as nearAPI from "near-api-js";

import { Link } from 'react-router-dom';

//import Layout from "../pages/Layout";

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
        isVisible,
        isVisibleSale,
        isVisibleBid,
        toggleModal,
        toggleSaleModal,
        toggleBidModal,
    } = useModal();

    
    const [nftResults, setNftResults] = useState([]);

    const [nftMarketResults, setNftMarketResults] = useState([]);
    
    const [minimum, setMinimum] = useState("");

    useEffect(() => {
        if (!showLoader) {
        
            if (currentUser != "")
                displayAllNFT();
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
    };
    
    const getMinimumStorage = async () => {
      let minimum_balance = await storage_minimum_balance()
        
      setMinimum(minimum_balance);
    };
    
    const sendStorageDeposit = async () => {
        getMinimumStorage();
        
        console.log(minimum)

        await storage_deposit(minimum, config.GAS)
    };
    
    const mintAssetToNft = async () => {
        toggleModal();

        let fcr = await nft_mint(`${values.assetTitle}`, `${values.assetDescription}`, `${values.assetUrl}`, config.GAS, currentUser, parseNearAmount("1"))
    
        if (fcr) {
          console.log("nft created: ");
        } else {
          console.log("nft not created");
        }
    };
    
    const approveNFTForSale = async (token_id) => {
        sendStorageDeposit();
        
        let sale_conditions = {
          sale_conditions: values.assetPrice,
        };

        await nft_approve(token_id, config.contractMarketplace, sale_conditions, parseNearAmount("0.01"))
    };
    
    const OfferPrice = async (token_id) => {
        await offer(config.contractName, token_id, parseNearAmount(values.assetBid), config.GAS)
    }
      
    const displayAllNFT = async () => {
        let userNFTs = await nft_tokens_for_owner(currentUser, "0", 64)

        setNftResults(userNFTs);
        setShowLoader(true);
    };


    return (
        <div>
          <header className="" style={{marginTop:200 + 'px'}}>
            <div className="menu">
              <div className="navbar-left">
                <h3> NFT MARKET</h3>
              </div>
              <nav className="navbar">
                <ul className="navbar-ul">
                  <li className="navbar-li pt-3 pr-2">
                    {currentUser ? (
                      <button href="#" className="log-link" onClick={logout}>
                        Log out
                      </button>
                    ) : (
                      <button href="#" className="log-link" onClick={login}>
                        Log In
                      </button>
                    )}
                  </li>
                  <li className="navbar-li">
                    {currentUser ? (
                      <button className="btn" onClick={toggleModal}>
                        Create NFT
                      </button>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Link to={`/marketplace/sell`}>Sell</Link>
          <Link to={"/marketplace/me"}>Own NFT</Link>

          <main className="main-wrapper">
            <div className="wrapper">
              {currentUser ? (
                <div className="welcome-wrapper">
                  <span className="welcome-text">Welcome! </span>
                  {currentUser}
                </div>
              ) : (
                "user not logged in"
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
                  e.preventDefault();
                  approveNFTForSale(nft.metadata.title);
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
            <h2>Our NFT</h2>
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
  : "NFTs not found"}
</div>



<div className="market-wrapper">
<div className="market-inner-wrapper">
  {nftMarketResults.length !== 0 ? (
    <div className="market-header">
      <h3>Market Place</h3>
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
                {currentUser !== nft.owner_id ? (
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



    

    
          <Modal isVisible={isVisible} hideModal={toggleModal}>
            <div className="outform-wrapper">
              <div className="form-wrapper">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    mintAssetToNft();
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
      );
  };
  
  export default Marketplace;
  