/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Modal from '../../components/Modal'
import { useTranslation } from 'react-i18next'

import * as nearAPI from 'near-api-js'

import { nearConfig, offer } from '../../assets/js/near/utils'

const initialValues = {
  assetTitle: '',
  assetDescription: '',
  assetUrl: '',
  assetPrice: '',
  assetBid: '',
}

// eslint-disable-next-line react/prop-types
export default function ModalCardBuyRealand({ elementCard, textButton }) {
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

  const OfferPrice = async (token_id) => {
    await offer(
      `${token_id}.${nearConfig.contractFactoryNFT}`,
      token_id,
      parseNearAmount(values.assetBid),
      nearConfig.GAS,
    )
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      button={
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded _btn-xl btn btn-primary btn_min-width "
          style={{ shadow: 'none', border: 'none' }}
        >
          {t(textButton)}
        </button>
      }
    >
      <Box
        className="rounded"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            OfferPrice(elementCard.id)
          }}
        >
          <div className="form-in-wrapper  d-flex flex-column justify-center aling-items-center">
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
            <button className=" rounded _btn-xl btn btn-primary">
              {t('Adquirir')}
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
