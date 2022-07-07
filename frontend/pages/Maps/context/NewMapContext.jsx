/* eslint-disable camelcase */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as h3 from 'h3-js'
import _ from 'lodash'

export const NewMapContext = React.createContext({})

export function NewMapContextProvider({ children }) {
  const [mapState, setMapState] = useState({
    onSingleView: false,
    hex_id: null,
    integer_id: null,
    isAuction: false,
    isEmbeed: false,
    isUserRelated: false,
    onMultipleLandSelection: false,
    multipleLandSelectionList: [],
    ownedLandList: [], // Based on Map viewport, it changes on zoom.
    auctionList: [],
    landData: {},
    marketplaceMode: 'primary', // primary || secondary
  })

  const changeHexId = (hex_id) => {
    if (h3.h3IsValid(hex_id)) {
      setMapState((s) => ({
        ...s,
        onSingleView: true,
        hex_id,
        integer_id: parseInt(hex_id, 16),
        isAuction: true,
      }))
    }
  }

  const setEmbeed = (booly) => {
    setMapState((s) => ({
      ...s,
      isEmbeed: booly,
    }))
  }

  const resetHexId = () => {
    setMapState((s) => ({
      ...s,
      onSingleView: false,
      hex_id: null,
      integer_id: null,
      landData: {},
    }))
  }

  const enableMultipleLandSelection = () => {
    setMapState((s) => ({ ...s, onMultipleLandSelection: true }))
  }

  const disableMultipleLandSelection = () => {
    setMapState((s) => ({ ...s, onMultipleLandSelection: false }))
  }

  const disableSingleView = () => {
    setMapState((s) => ({
      ...s,
      onSingleView: false,
    }))
  }

  const changeLandData = (data) => {
    setMapState((s) => ({ ...s, landData: data }))
  }

  const changeAuctionList = (list) => {
    setMapState((s) => ({ ...s, auctionList: list }))
  }

  const changeMultipleLandSelectionList = (list) => {
    setMapState((s) => ({ ...s, multipleLandSelectionList: _.uniq(list) }))
  }

  const changeOwnedLandList = (list) => {
    setMapState((s) => ({ ...s, ownedLandList: _.uniq(list) }))
  }

  const resetMultipleLandSelectionList = () => {
    setMapState((s) => ({ ...s, multipleLandSelectionList: [] }))
  }

  const changeMarketplaceModeToPrimary = () => {
    setMapState((s) => ({
      ...s,
      marketplaceMode: 'primary',
    }))
  }

  const changeMarketplaceModeToSecondary = () => {
    setMapState((s) => ({
      ...s,
      marketplaceMode: 'secondary',
    }))
  }

  const actions = {
    changeHexId,
    resetHexId,
    enableMultipleLandSelection,
    disableMultipleLandSelection,
    disableSingleView,
    changeLandData,
    changeAuctionList,
    changeMultipleLandSelectionList,
    changeOwnedLandList,
    resetMultipleLandSelectionList,
    changeMarketplaceModeToPrimary,
    changeMarketplaceModeToSecondary,
    setEmbeed,
  }

  return (
    <NewMapContext.Provider value={{ mapState, setMapState, actions }}>
      {children}
    </NewMapContext.Provider>
  )
}

NewMapContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
