import React from 'react'

import { Link } from 'react-router-dom'

const NftSell = () => {
  return (
    <div style={{ marginTop: 200 + 'px' }}>
      <p>NFT Sell</p>

      <Link to={'/marketplace/me'}>Own NFT</Link>

      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    </div>
  )
}

export default NftSell
