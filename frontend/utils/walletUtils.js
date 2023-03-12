import * as nearAPI from "near-api-js";
import {
  get_required_deposit,
  buy,
  callMethodBatch,
} from "../assets/js/near/utils";

const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
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
      icon: "",
      reference: "",
      reference_hash: "",
    },
    x: `${posX}`,
    y: `${posY}`,
  };
};

export const buy_ft = async (amount) => {
  // await buy(parseNearAmount(amount));
  await callMethodBatch(
    "dev-1675634479426-76608507847363",
    {},
    100000000000,
    parseNearAmount(amount)
  );
};

export const buy_ft_2 = async (deposit) => {
  const gas = 30000000000000;
  const contractId = "dev-1675634479426-76608507847363";
  // Sign **independent** transactions: If one fails, the rest **DO NOT** reverted
  await window.wallet.wallet.signAndSendTransaction({
    signerId: window.walletConnection.account(),
    receiverId: contractId,
    actions: [
      {
        type: "FunctionCall",
        params: {
          methodName: "storage_deposit",
          args: Buffer.from(JSON.stringify({})),
          gas,
          deposit: 1250000000000000000000n,
        },
      },
      {
        type: "FunctionCall",
        params: {
          methodName: "buy",
          args: Buffer.from(JSON.stringify({})),
          gas,
          deposit: parseNearAmount(deposit),
        },
      },
    ],
  });
};

export const getPriceRealand = async (args, currentUser) => {
  const amount = await get_required_deposit(args, currentUser);

  return formatNearAmount(amount);
};

export const buildRealandTokenMetadata = (id) => {
  let data = [
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
