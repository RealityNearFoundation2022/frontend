import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import * as nearAPI from 'near-api-js'

import { callMethod, nearConfig, nft_approve_all } from '../../assets/js/near/utils'

const initialValues = {
    assetTitle: '',
    assetDescription: '',
    assetUrl: '',
    assetPrice: '',
    assetBid: '',
  }

export default function ModalCardSellRealand({elementCard}) {

  const {
      utils: {
        format: { parseNearAmount },
      },
    } = nearAPI
    

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState(initialValues)

  const { t } = useTranslation()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const approveNFTForSale = async (token_id) => {
    // sendStorageDeposit();

    let sale_conditions = {
      sale_conditions: values.assetPrice,
    }
    console.log(token_id)
    await nft_approve_all({
        contractId: `${token_id.toLowerCase()}.${nearConfig.contractFactoryNFT}`,
        args:{
            token_id: token_id,
            account_id: nearConfig.contractMarketplace,
            msg: JSON.stringify(sale_conditions)
        },
        amount: parseNearAmount('0.01')
    })
  }
 
  useEffect(() => {

  }, [])

  return (
    <div>
        {}
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ width: '50%', height: '50%', background: 'white', "margin-top":'15%', "margin-left": '25%' }}>
        <div className="outform-wrapper">
                    <div className="form-wrapper">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          approveNFTForSale(elementCard.id)
                        }}
                      >
                        <div className="form-in-wrapper">
                          <h3 className="text-center pb-1">Sell Realand</h3>
                        
                          <p className="text pb-1">
                            <strong>{elementCard.titleItem}</strong>
                            <hr/>
                            <strong>Contract:</strong> {elementCard.id.toLowerCase()}.{nearConfig.contractFactoryNFT}
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

                          <div className="form-btn-wrapper">
                            <button className="form-btn">Sell now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
        </div>
      </Modal>
    </div>
  );
}