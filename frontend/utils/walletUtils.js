import * as nearAPI from "near-api-js";
import { get_required_deposit } from "../assets/js/near/utils";

const {
  utils: {
    format: { parseNearAmount, formatNearAmount },
  },
} = nearAPI;

export const buildRealandMetadata = (currentUser, posX, posY) => {
  return {
    // account_id
    owner_id: currentUser,
    metadata: {
      spec: "nft-1.0.0",
      name: `land #${posX}${posY}`,
      symbol: `#R${posX}${posY}`,
      icon: "data:image/png;base64,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",
      reference: "",
      reference_hash: "",
    },
    x: `${posX}`,
    y: `${posY}`,
  };
};

export const getPriceRealand = async (args, currentUser) => {
  const amount = await get_required_deposit(args, currentUser);

  return formatNearAmount(amount);
};

export const buildRealandTokenMetadata = (id) => {
  data = [
    {
      description: "Districto tecnologico",
      media:
        "https://www.canr.msu.edu/contentAsset/image/25a972ec-e75d-4585-958b-8990c3d001b3/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80",
    },
    {
      description: "Districto deportivo",
      media: "",
    },
    {
      description: "Districto de negocios",
      media: "",
    },
    {
      description: "Districto de educacion",
      media: "",
    },
  ];

  return {
    description: data[id].description,
    media: data[id].media,
    media_hash: null,
    // issued_at: null,
    // expires_at: null,
    // starts_at: null,
    // updated_at: null,
    // reference: null,
    // reference_hash: null
  };
};
