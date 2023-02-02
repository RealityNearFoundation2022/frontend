import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import * as nearAPI from "near-api-js";

import {
  callMethod,
  nearConfig,
  nft_approve_all,
  offer,
} from "../../assets/js/near/utils";

const initialValues = {
  assetTitle: "",
  assetDescription: "",
  assetUrl: "",
  assetPrice: "",
  assetBid: "",
};

export default function ModalCardBuyRealand({ elementCard, textButton }) {
  const {
    utils: {
      format: { parseNearAmount },
    },
  } = nearAPI;

  //STATES
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState(initialValues);

  const { t } = useTranslation();

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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const OfferPrice = async (token_id) => {
    console.log(token_id)
    await offer(
      `${token_id}.${nearConfig.contractFactoryNFT}`,
      token_id,
      parseNearAmount(values.assetBid),
      nearConfig.GAS
    );
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => setOpen(true)}>{textButton}</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "white",
            "margin-top": "15%",
            "margin-left": "25%",
          }}
        >
          <div className="form-wrapper">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                OfferPrice(elementCard.id);
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
                <div className="form-btn _btn-wrapper">
                  <button className="form-btn _btn">
                    Enter Bid
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
