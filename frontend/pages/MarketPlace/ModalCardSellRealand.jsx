import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Modal from '../../components/Modal'

import * as nearAPI from 'near-api-js'

import {
  callMethod,
  nearConfig,
  nft_approve_all,
} from '../../assets/js/near/utils'

const initialValues = {
  assetTitle: '',
  assetDescription: '',
  assetUrl: '',
  assetPrice: '',
  assetBid: '',
}

export default function ModalCardSellRealand({ elementCard, textButton }) {
  const {
    utils: {
      format: { parseNearAmount },
    },
  } = nearAPI

  //STATES
  const [open, setOpen] = React.useState(false)
  const [values, setValues] = useState(initialValues)

  const { t } = useTranslation()

  /**
   * Updates the state of a form field in response to a change in the input value.
   *
   * @param {Event} e The event object for the change event.
   * @return {void}
   *
   * @example
   * handleInputChange(event);
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  /**
   * Approves a non-fungible token (NFT) for sale on the marketplace contract.
   *
   * @param {string} token_id The ID of the NFT to be approved for sale.
   * @return {void}
   *
   * @example
   * approveNFTForSale('1234567890');
   */
  const approveNFTForSale = async (token_id) => {
    let sale_conditions = {
      sale_conditions: values.assetPrice,
    }
    console.log(token_id)
    await nft_approve_all({
      contractId: `${token_id.toLowerCase()}.${nearConfig.contractFactoryNFT}`,
      args: {
        token_id: token_id,
        account_id: nearConfig.contractMarketplace,
        msg: JSON.stringify(sale_conditions),
      },
      amount: parseNearAmount('0.01'),
    })
  }

  useEffect(() => {}, [])

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      button={
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded _btn-xl btn btn-primary"
          style={{ shadow: 'none', border: 'none' }}
        >
          {textButton}
        </button>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          approveNFTForSale(elementCard.id)
        }}
      >
        <div className="form-in-wrapper  d-flex flex-column aling-items-center">
          <h3 className="text-center pb-1">Sell Realand</h3>

          <p className="text pb-1">
            <strong>{elementCard.titleItem}</strong>
            <hr />
            <strong>Contract:</strong> {elementCard.id.toLowerCase()}.
            {nearConfig.contractFactoryNFT}
          </p>
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

          <button className=" rounded _btn-xl btn btn-primary">Vender</button>
        </div>
      </form>
    </Modal>
  )
}
