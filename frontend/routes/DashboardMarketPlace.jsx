import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Marketplace from '../pages/MarketPlace/IndexMarketplace'
export function DashboardMarketPlace() {
  return (
    <div className="">
      <Routes>
        <Route path="marketplace" element={<Marketplace />} />
      </Routes>
    </div>
  )
}
