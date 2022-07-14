/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import geojson2h3 from 'geojson2h3'
import * as h3 from 'h3-js'
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'
import { coordinatesGeojson, tokenMapBox } from '../../utils/mapboxUtils'
import HexButton from './HexButton'
// import ReactGA from 'react-ga'
import landsData from './lands.json'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { indexInterestingLands } from './mockJson'
// import config from 'lib/config'

// import { unavailableH3, tourEiffelH3 } from 'assets/constants'
// import { warningNotification } from 'lib/notifications'
// import { indexInterestingLands, getCachedOpenLandsGeojson } from 'lib/api'

import { NewMapContext } from './context/NewMapContext'

// import Breadcrumbs from 'components/Breadcrumbs/MapBreadcrumbs'
// import BannerCounter from 'components/BannerCounter/BannerCounter'
// import HexButton from 'components/HexButton/HexButton'
// import SoldLabel from 'assets/img/sold-label-bg.png'
// import OnSaleLabel from 'assets/img/on-sale-label-red.png'
// import OwnerLabel from 'assets/img/owner-label.png'
// import AuctionLabel from 'assets/img/auction-label.png'
// import Live from 'assets/img/live-label.png'

// import FormGroup from '@material-ui/core/FormGroup'
// import { FormControlLabel, Switch } from '@mui/material';
// // import EventBanner from 'components/EventBanner'
// import SelectCollectible from './SelectCollectible'

let map
const config = {
  map: {
    lat: 28.0922495,
    lng: 13.2312417,
    zoom: 0.7,
    fillOpacity: 0.2,
    colorScale: [
      'rgba(255,255,255, 0)',
      '#ffffff',
      '#1a0731',
      '#EC663C',
      '#0081DD',
    ],
  },
}
const unavailableH3 = [
  '8cbe0e35c0947ff',
  '8cbe0e35c095bff',
  '8cbe0e35c090bff',
  '8cbe0e35c096bff',
  '8cbe0e35c0939ff',
  '8cbe0e35c0957ff',
  '8cbe0e35c0865ff',
  '8cbe0e35c095dff',
  '8cbe0e35c0969ff',
  '8cbe0e35c0955ff',
]
const tourEiffelH3 = [
  '8c1fb46741a17ff',
  '8c1fb46741a15ff',
  '8c1fb46741a39ff',
  '8c1fb46741a85ff',
  '8c1fb46741127ff',
  '8c1fb46741a8bff',
  '8c1fb46741a9dff',
  '8c1fb46741a23ff',
  '8c1fb46741a1bff',
  '8c1fb46741a01ff',
  '8c1fb46741aa9ff',
  '8c1fb46741a19ff',
  '8c1fb46741aebff',
  '8c1fb46741a37ff',
  '8c1fb46741851ff',
  '8c1fb46741857ff',
  '8c1fb46741a3dff',
  '8c1fb46741a8dff',
  '8c1fb46741a07ff',
  '8c1fb46741acbff',
  '8c1fb46741a1dff',
  '8c1fb4674185dff',
  '8c1fb46741a2bff',
  '8c1fb46741a13ff',
  '8c1fb46741ae1ff',
  '8c1fb46741a89ff',
  '8c1fb46741a29ff',
  '8c1fb46741a31ff',
  '8c1fb46741ac5ff',
  '8c1fb46741ad5ff',
  '8c1fb46741addff',
  '8c1fb46741aedff',
  '8c1fb46741ae5ff',
  '8c1fb46741859ff',
  '8c1fb46741ae9ff',
  '8c1fb46741a05ff',
  '8c1fb46741a0bff',
  '8c1fb46741ae7ff',
  '8c1fb46741a03ff',
  '8c1fb46741ac3ff',
  '8c1fb46741a35ff',
  '8c1fb46741aadff',
  '8c1fb46741a11ff',
  '8c1fb46741853ff',
  '8c1fb46741a3bff',
  '8c1fb46741a87ff',
  '8c1fb46741a83ff',
  '8c1fb46741ac1ff',
  '8c1fb46741acdff',
  '8c1fb46741121ff',
  '8c1fb4674185bff',
  '8c1fb46741ae3ff',
  '8c1fb46741125ff',
  '8c1fb46741123ff',
  '8c1fb46741a33ff',
  '8c1fb46741ac9ff',
  '8c1fb46741ac7ff',
  '8c1fb46741a81ff',
  '8c1fb4674184bff',
  '8c1fb46741ad7ff',
]
function IndexMaps(props) {
  const [selected, setSelected] = useState(null)

  // const history = useHistory()
  const { t } = useTranslation()
  const { mapState, setMapState, actions } = useContext(NewMapContext)
  const {
    onSingleView,
    onMultipleLandSelection,
    multipleLandSelectionList,
    ownedLandList,
    auctionList,
    hex_id,
    marketplaceMode,
  } = mapState

  const [lastSelectedLand, setLastSelectedLand] = useState(null)
  const [mapMoveendChange, setMapMoveendChange] = useState(true)
  const [isMapReady, setIsMapReady] = useState(false)
  const [pointClicked, setPointClicked] = useState(
    config.map.lat,
    config.map.lng,
  )
  const [onViewLands, setOnViewLands] = useState([])
  const [hidedMarkers, setHidedMarkers] = useState(false)

  useEffect(() => {
    actions.setEmbeed(true)
    return () => {
      actions.setEmbeed(false)
    }
  }, [])

  useEffect(() => {
    const hexes = document.getElementsByClassName('hex-marker')
    console.log('hidedMarkers', hidedMarkers)

    if (hidedMarkers) {
      Array.from(hexes).forEach((single) => {
        single.classList.add('hex-marker-hided')
      })
    } else {
      Array.from(hexes).forEach((single) => {
        single.classList.remove('hex-marker-hided')
      })
    }
  }, [hidedMarkers, onViewLands])

  const {
    changeMultipleLandSelectionList,
    changeOwnedLandList,
    disableSingleView,
    changeHexId,
    resetHexId,
  } = actions

  // EFFECT []
  useEffect(() => {
    if (map) return
    mapboxgl.accessToken = tokenMapBox
    map = new mapboxgl.Map({
      container: 'Map',
      center: [-103.5917, 40.6699],
      zoom: 0.7,
      minZoom: 1,
      style: 'mapbox://styles/mapbox/light-v9?optimize=true',
      renderWorldCopies: false,
      tileLayer: {
        continuousWorld: false,
        noWrap: true,
      },
    })
    waitMapStyle()

    // geocoder setup
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false,
    })
    map.addControl(geocoder)

    // adding coords geocoder
    const coordinatesGeocoder = (query) => {
      // Match anything which looks like
      // decimal degrees coordinate pair.
      const matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i,
      )
      if (!matches) {
        return null
      }

      function coordinateFeature(lng, lat) {
        return {
          center: [lng, lat],
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
          place_name: `${lat},${lng}`,
          place_type: ['coordinate'],
          properties: {},
          type: 'Feature',
        }
      }

      const coord1 = Number(matches[1])
      const coord2 = Number(matches[2])
      const geocodes = []

      geocodes.push(coordinateFeature(coord2, coord1))

      return geocodes
    }

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 19,
        placeholder: 'Coords: -40, 170',
        mapboxgl,
      }),
    )

    // geocoder init
    map.on('load', () => {
      geocoder.on('result', (ev) => {
        map.flyTo({
          center: [
            ev.result.geometry.coordinates[0],
            ev.result.geometry.coordinates[1],
          ],
          zoom: 18,
          speed: 1.8,
        })
      })
      map.addLayer({
        id: 'mapbox-mapbox-satellite',
        source: {
          type: 'raster',
          url: 'mapbox://mapbox.satellite',
          tileSize: 256,
        },
        type: 'raster',
      })
      map.setLayoutProperty('mapbox-mapbox-satellite', 'visibility', 'none')

      const switchy = document.getElementById('js-map-view')
      if (switchy) {
        switchy.addEventListener('click', () => {
          // React GA
          ReactGA.initialize('UA-128415861-1')
          ReactGA.pageview(`/map/switch`)
          ReactGA.set({ page: '/map/switch' })
          ReactGA.event({
            category: 'Map',
            action: 'Switch View',
          })

          if (switchy.className === 'on') {
            switchy.setAttribute('class', 'off')
            map.setLayoutProperty(
              'mapbox-mapbox-satellite',
              'visibility',
              'none',
            )
            switchy.innerHTML = 'Satellite'
          } else {
            switchy.setAttribute('class', 'on')
            map.setLayoutProperty(
              'mapbox-mapbox-satellite',
              'visibility',
              'visible',
            )
            switchy.innerHTML = 'Streets'
          }
        })
      }
    })

    // listen events to load lands from cluster endpoint
    const delayedQuery = _.debounce((q) => {
      setMapMoveendChange(Math.random())
    }, 350)
    map.on('moveend', () => {
      // delayedQuery()
    })
  }, [])

  useEffect(() => {
    changeClusters()
  }, [mapMoveendChange, selected])

  // EFFECT [onMultipleLandSelection, lastSelectedLand]
  useEffect(() => {
    // console.debug('EFFECT [ onMultipleLandSelection, lastSelectedLand]')
    let onClickMap
    if (map) {
      onClickMap = (e) => {
        // At click go to Land
        if (onMultipleLandSelection) {
          resetHexId()
        }
        setPointClicked(e.lngLat.lat, e.lngLat.lng)
        const clicked_hex_id = h3.geoToH3(e.lngLat.lat, e.lngLat.lng, 12)
        console.log('clicked_hex_id', clicked_hex_id)
        // TODO: Change tourEiffelH3 to list eiffel
        if (R.includes(clicked_hex_id, tourEiffelH3)) {
          focusMap(clicked_hex_id)
          const alink = document.createElement('a')
          alink.href = 'https://link.ovr.ai/eiffel'
          alink.target = '_blank'
          alink.click()
        }

        if (!onMultipleLandSelection) {
          focusMap(clicked_hex_id)
          // props.history.push(`/map/land/${clicked_hex_id}`)
          const landSelectedEvent = new CustomEvent('land-selected', {
            detail: {
              clicked_hex_id,
            },
          })
          document.dispatchEvent(landSelectedEvent)
        } else {
          // At click add in list if on Multiple Land Selection Mode
          //   focusMap(clicked_hex_id)

          //   if (!R.isNil(hex_id)) {
          //     focusMap(clicked_hex_id)
          //   }
          const list = multipleLandSelectionList
          if (R.includes(clicked_hex_id, list) && !R.isNil(list)) {
            // Remove Land
            _.remove(list, (el) => el === clicked_hex_id)
            changeMultipleLandSelectionList(list)
          } else {
            // Add Land

            if (!R.includes(clicked_hex_id, unavailableH3)) {
              if (!R.includes(clicked_hex_id, ownedLandList)) {
                if (!R.includes(clicked_hex_id, onViewLands)) {
                  list.push(clicked_hex_id)
                }
              } else {
                warningNotification(
                  t('MultipleLandSelection.error.alreadyowned'),
                )
              }

              if (R.length(list) === 1 && !onSingleView) {
                focusMap(clicked_hex_id)
              } else {
                disableSingleView()
              }
              changeMultipleLandSelectionList(list)
            } else {
              warningNotification(
                t('Land.unavailable.notification.title'),
                t('Land.unavailable.notification.subtitle'),
              )
            }
          }
          //    else {
          //     // changeHexId(clicked_hex_id)
          //     console.debug('CLICKEEEDDD', { clicked_hex_id, lastSelectedLand })
          //   }

          setLastSelectedLand(clicked_hex_id)
        }
      }
      map.on('click', onClickMap)
    }

    return () => {
      if (map) {
        map.off('click', onClickMap)
      }
    }
  }, [onMultipleLandSelection, lastSelectedLand])

  // EFFECT [isMapReady, onSingleView, onMultipleLandSelection, multipleLandSelectionList]
  useEffect(() => {
    // console.debug(
    //   'EFFECT [isMapReady, onSingleView, onMultipleLandSelection, multipleLandSelectionList]'
    // )
    if (setIsMapReady) {
      plotHighZoomPOI()
      if (onMultipleLandSelection) {
        map.doubleClickZoom.disable()
      } else {
        map.doubleClickZoom.enable()
      }
    }
  }, [
    isMapReady,
    onSingleView,
    onMultipleLandSelection,
    multipleLandSelectionList,
    plotHighZoomPOI,
  ])

  // EFFECT [isMapReady]
  useEffect(() => {
    if (isMapReady) {
      renderOwnedLandsCluster()
    }
  }, [isMapReady])

  // useEffect(() => {
  //   alert('pointClicked UE')
  //   alert(hex_id)
  //   if (!R.isNil(hex_id) && !R.isEmpty(hex_id)) {
  //     addFocusToHexId(hex_id)
  //   }
  // }, [mapState.hex_id, pointClicked])

  // Functions
  /// /////////////////////////////////////////////////////////

  /**
   * Send a request to change the cluster informations.
   */
  function changeClusters() {
    const mapBounds = map.getBounds()
    const mapZoom = map.getZoom()
    const bounds = [
      mapBounds.getWest(),
      mapBounds.getSouth(),
      mapBounds.getEast(),
      mapBounds.getNorth(),
    ]
    const zoom = Math.round(mapZoom)

    const params = {
      zoom,
      bounds,
      type: 'collectible',
      collectible: selected,
    }
    if (R.isNil(selected)) return
    // axios
    //   .post(config.apis.mapboxCluster, params)
    //   .then((response) => {
    const list = R.pathOr([], ['data', 'features'], landsData)
    const ownedList = R.reject(R.isNil, R.pluck('id', list))
    changeOwnedLandList(ownedList)
    const data = R.prop('data', landsData)
    if (!data) return
    if (!R.isNil(map.getSource('owned_cluster'))) {
      map.getSource('owned_cluster').setData(data)
    }
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }

  function waitMapStyle() {
    if (!map.isStyleLoaded()) {
      setTimeout(waitMapStyle, 200)
    } else {
      setIsMapReady(true)
    }
  }

  function renderHighZoomHexes(hexags) {
    console.log('hexags', Object.keys(hexags), (hex) => ({
      value: hexags[hex],
    }))
    debugger
    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(hexags),
      (hex) => ({
        value: hexags[hex],
      }),
    )
    // console.log(coordinates())
    // const geojson = [
    //   {
    //     type: 'Feature',
    //     id: '8c01120019339ff',
    //     properties: {
    //       value: 0.2523820479083345,
    //     },
    //     geometry: {
    //       type: 'Polygon',
    //       coordinates: [
    //         [
    //           [40.781331436537634, 72.11005729329993],
    //           [40.78162516230078, 72.11007183746582],
    //           [40.78170373572257, 72.11015611530831],
    //           [40.78148858090806, 72.11022584919593],
    //           [40.78119485262538, 72.11021130472923],
    //           [40.78111628167677, 72.11012702667576],
    //           [40.781331436537634, 72.11005729329993],
    //         ],
    //       ],
    //     },
    //   },
    // ]
    console.log('geojson 0', geojson)
    const sourceId = 'h3-hexes'
    const layerId = `${sourceId}-layer`
    let source = map.getSource(sourceId)

    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#5F39BE',
        },
      })
      source = map.getSource(sourceId)
      console.log('source', source)
    }

    // Update the geojson data
    source.setData(geojson)

    // Update the layer paint properties, using the current config values
    map.setPaintProperty(layerId, 'fill-opacity', config.map.fillOpacity)

    map.setPaintProperty(layerId, 'fill-color', {
      property: 'value',
      stops: [
        [0, config.map.colorScale[0]],
        [0.5, config.map.colorScale[0]],
        [1, config.map.colorScale[0]],
      ],
    })
  }

  function renderHighZoomInterestingHexes(hexags) {
    // Filter rendering Hexagons to see if there is some interesting
    indexInterestingLands(Object.keys(hexags)[0]).then((response) => {
      if (response.data.result) {
        const { lands } = response.data
        const withProjectNotOnSale = R.difference(
          lands.withProjects,
          lands.onSale,
        )

        setOnViewLands(
          _.union(lands.onSale, withProjectNotOnSale, lands.minted),
        )

        renderHighZoomMintedLands(R.difference(lands.minted, lands.user.minted))

        renderHighZoomUserMintedLands(lands.user.minted)
        renderHighZoomWithProjectsLands(withProjectNotOnSale)
        renderHighZoomOnSaleLands(lands.onSale)

        // renderClosingAuctions(lands.auctionClosing);
        renderHighZoomOngoingAuctions(
          lands.auctionStarted.concat(lands.auctionClosing),
        )
      }
    })
  }

  function renderHighZoomWithProjectsLands(userExagons) {
    // Prepare format
    const data = { ...userExagons }
    const newData = Object.keys(data).reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[data[key]] = Math.random()
      return obj
    }, {})

    // Plot hexes
    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(newData),
      (hex) => ({
        value: userExagons[hex],
      }),
    )
    console.log('geojson', geojson)
    const sourceId = 'h3-with-projects-hexes'
    const layerId = `${sourceId}-with-projects-hexes`
    let source = map.getSource(sourceId)

    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#c44177',
          'fill-color': 'rgba(196, 65, 119, 0.5)',
          'fill-opacity': 1,
        },
      })
      source = map.getSource(sourceId)
    }

    // Update the geojson data
    source.setData(geojson)
    // Add markers
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker

      const el = document.createElement('div')
      el.className = 'with-projects-marker'

      el.classList.add('hex-marker')

      el.style.backgroundImage = `url(${Live})`
      el.style.width = '59px'
      el.style.height = '60px'

      map.on('zoom', () => {
        if (map.getZoom() < 17) {
          const paras = document.getElementsByClassName('with-projects-marker')

          while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
          }
        }
      })

      // add marker to map
      // console.log('marker.geometry.id',marker.id)
      const coordi = h3.h3ToGeo(marker.id)

      new mapboxgl.Marker(el, {
        anchor: 'center',
      })
        .setLngLat([coordi[1], coordi[0]])
        .addTo(map)
    })
  }

  function renderHighZoomOnSaleLands(userExagons) {
    // Prepare format
    const data = { ...userExagons }
    const newData = Object.keys(data).reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[data[key]] = Math.random()
      return obj
    }, {})

    // Plot hexes
    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(newData),
      (hex) => ({
        value: userExagons[hex],
      }),
    )
    console.log('geojson 2', geojson)
    const sourceId = 'h3-on-sale-hexes'
    const layerId = `${sourceId}-on-sale-hexes`
    let source = map.getSource(sourceId)

    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#DE5F60',
          'fill-color': 'rgba(222, 95, 96, 0.5)',
          'fill-opacity': 1,
        },
      })
      source = map.getSource(sourceId)
    }

    // Update the geojson data
    source.setData(geojson)
    // Add markers
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker

      const el = document.createElement('div')
      el.className = 'on-sale-marker'

      el.classList.add('hex-marker')

      el.style.backgroundImage = `url(${OnSaleLabel})`
      el.style.width = '59px'
      el.style.height = '33px'

      map.on('zoom', () => {
        if (map.getZoom() < 17) {
          const paras = document.getElementsByClassName('on-sale-marker')

          while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
          }
        }
      })

      // add marker to map
      // console.log('marker.geometry.id',marker.id)
      const coordi = h3.h3ToGeo(marker.id)

      new mapboxgl.Marker(el, {
        anchor: 'center',
      })
        .setLngLat([coordi[1], coordi[0]])
        .addTo(map)
    })
  }

  function renderHighZoomUserMintedLands(userExagons) {
    // Prepare format
    const data = { ...userExagons }
    const newData = Object.keys(data).reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[data[key]] = Math.random()
      return obj
    }, {})

    // Plot hexes

    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(newData),
      (hex) => ({
        value: userExagons[hex],
      }),
    )
    console.log('geojson 3', geojson)
    const sourceId = 'h3-user-interesting-hexes'
    const layerId = `${sourceId}-user-interesting-layer`
    let source = map.getSource(sourceId)

    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#3d948d',
          'fill-color': 'rgba(4, 170, 109, 0.6)',
          'fill-opacity': 1,
        },
      })
      source = map.getSource(sourceId)
    }

    // Update the geojson data
    source.setData(geojson)
    // Add markers
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker

      const el = document.createElement('div')
      el.className = 'sold-marker'

      el.classList.add('hex-marker')

      el.style.backgroundImage = `url(${OwnerLabel})`
      el.style.width = '53px'
      el.style.height = '52px'

      map.on('zoom', () => {
        if (map.getZoom() < 17) {
          const paras = document.getElementsByClassName('sold-marker')

          while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
          }
        }
      })

      // add marker to map
      // console.log('marker.geometry.id',marker.id)
      const coordi = h3.h3ToGeo(marker.id)

      new mapboxgl.Marker(el, {
        anchor: 'center',
      })
        .setLngLat([coordi[1], coordi[0]])
        .addTo(map)
    })
  }

  function renderHighZoomMintedLands(hexags) {
    // Prepare format
    const data = { ...hexags }
    const newData = Object.keys(data).reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[data[key]] = Math.random()
      return obj
    }, {})

    // Plot hexes
    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(newData),
      (hex) => ({
        value: hexagons[hex],
      }),
    )
    console.log('geojson 4', geojson)
    const sourceId = 'h3-interesting-hexes'
    const layerId = `${sourceId}-interesting-layer`
    let source = map.getSource(sourceId)

    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#ec663c',
          'fill-color': 'rgba(249,180,38,0.4)',
          'fill-opacity': 1,
        },
      })
      source = map.getSource(sourceId)
    }

    // Update the geojson data
    source.setData(geojson)
    // Add markers
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker

      const el = document.createElement('div')
      el.className = 'sold-marker'

      el.classList.add('hex-marker')

      el.style.backgroundImage = `url(${SoldLabel})`
      el.style.width = '50px'
      el.style.height = '29px'

      map.on('zoom', () => {
        if (map.getZoom() < 17) {
          const paras = document.getElementsByClassName('sold-marker')

          while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
          }
        }
      })

      // add marker to map
      // console.log('marker.geometry.id',marker.id)
      const coordi = h3.h3ToGeo(marker.id)

      new mapboxgl.Marker(el, {
        anchor: 'center',
      })
        .setLngLat([coordi[1], coordi[0]])
        .addTo(map)
    })
  }

  function renderOwnedLandsCluster() {
    map.addSource('owned_cluster', {
      type: 'geojson',
      // data: { type: 'FeatureCollection', features: [] },
      data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
      cluster: false,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
    })
    map.addLayer({
      id: 'owned_clusters',
      type: 'circle',
      source: 'owned_cluster',
      filter: ['has', 'point_count'],
      layout: {
        visibility: 'visible', // visible, none
      },
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#514283',
          100,
          '#514283',
          750,
          '#331F56',
        ],
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
      },
    })
    map.addLayer({
      id: 'owned-cluster-count',
      type: 'symbol',
      source: 'owned_cluster',
      filter: ['has', 'point_count'],
      layout: {
        visibility: 'visible',
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12,
      },
      paint: {
        'text-color': '#ffffff',
      },
    })
    map.addLayer({
      id: 'owned-unclustered-point',
      type: 'circle',
      source: 'owned_cluster',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': '#11b4da', // Yellow: rgba(249,180,38,1)
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff',
      },
    })
    // inspect a cluster on click
    map.on('click', 'owned_clusters', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['owned_clusters'],
      })
      const clusterId = features[0].properties.cluster_id
      map
        .getSource('owned_cluster')
        .getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom,
          })
        })
    })

    map.on('mouseenter', 'owned_clusters', () => {
      map.getCanvas().style.cursor = 'pointer'
    })
    map.on('mouseleave', 'owned_clusters', () => {
      map.getCanvas().style.cursor = ''
    })
  }

  function renderHighZoomOngoingAuctions(hexags) {
    // Prepare format
    const data = { ...hexags }
    const newData = Object.keys(data).reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[data[key]] = Math.random()
      return obj
    }, {})
    // Plot hexes
    const geojson = geojson2h3.h3SetToFeatureCollection(
      Object.keys(newData),
      (hex) => ({
        value: hexagons[hex],
      }),
    )
    console.log('geojson 5', geojson)
    const sourceId = 'h3-ongoing-auctions-hexes'
    const layerId = `${sourceId}-ongoing-auctions-layer`
    let source = map.getSource(sourceId)
    if (!source) {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
      })
      map.addLayer({
        id: layerId,
        source: sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#fff',
          'fill-color': 'rgba(136, 81, 180, 0.5)',
          'fill-opacity': 1,
        },
      })
      source = map.getSource(sourceId)
    }

    // Update the geojson data
    source.setData(geojson)
    // Add markers
    geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const el = document.createElement('div')
      el.className = 'sold-marker'

      el.classList.add('hex-marker')

      el.style.backgroundImage = `url(${AuctionLabel})`
      el.style.width = '45px'
      el.style.height = '45px'

      map.on('zoom', () => {
        if (map.getZoom() < 17) {
          const paras = document.getElementsByClassName('auction-marker')

          while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0])
          }
        }
      })
      // add marker to map
      const coordi = h3.h3ToGeo(marker.id)
      new mapboxgl.Marker(el, {
        anchor: 'center',
      })
        .setLngLat([coordi[1], coordi[0]])
        .addTo(map)
    })
  }

  function hexagons() {
    const center = map.getCenter()
    const centerHex = h3.geoToH3(center.lat, center.lng, 12)
    const kRing = h3.kRing(centerHex, 20)
    const data = { ...kRing }
    const newData = Object.keys(data).reduce((obj, key) => {
      obj[data[key]] = Math.random()
      return obj
    }, {})
    debugger
    return newData
  }

  function focusMap(hex_id) {
    // Hex to geo
    const hexCenterCoordinates = h3.h3ToGeo(hex_id)
    // Move map focus
    map.flyTo({
      center: [hexCenterCoordinates[1], hexCenterCoordinates[0]],
      zoom: 18,
      speed: 1.8,
    })
    // Plot graphic point into map
    const singleHexGeojson = geojson2h3.h3ToFeature(hex_id)
    console.log('singleHexGeojson', singleHexGeojson)
    const tooltip = new mapboxgl.Popup()
      .setLngLat([hexCenterCoordinates[1], hexCenterCoordinates[0]])
      .setHTML(
        `<a href="https://marketplace.ovr.ai/map/land/${hex_id}" target="_blank" style="color: #000; text-decoration: none">Reality Near here!</a>`,
      )
      .addTo(map)

    const selected_sourceId = 'h3-hexes_selected'
    const selected_layerId = `${selected_sourceId}-layer`
    let selected_source = map.getSource(selected_sourceId)
    if (!selected_source) {
      map.addSource(selected_sourceId, {
        type: 'geojson',
        data: singleHexGeojson,
      })
      map.addLayer({
        id: selected_layerId,
        source: selected_sourceId,
        type: 'fill',
        interactive: false,
        paint: {
          'fill-outline-color': '#4A90E2',
          'fill-color': 'rgba(74,144,226,0.20)',
          'fill-opacity': 1,
        },
      })
      selected_source = map.getSource(selected_sourceId)
    }
    // Update the h3Geo data

    selected_source.setData(singleHexGeojson)
    map.setLayoutProperty(selected_layerId, 'visibility', 'visible')
  }

  // function addFocusToHexId(hexId) {
  //   alert(`clickPointed${clickPointed[0]}`)
  //   const hexCenterCoordinates = h3.h3ToGeo(hexId)
  //   const selectedSourceId = 'h3-hexes_selected'

  //   map.flyTo({
  //     center: [hexCenterCoordinates[1], hexCenterCoordinates[0]],
  //     zoom: 18,
  //     speed: 2.2,
  //   })
  // }

  function plotHighZoomPOI() {
    // Zoom out map // General Map View
    if (onSingleView === false && onMultipleLandSelection === false) {
      map.flyTo({
        center: [-103.5917, 40.6699],
        zoom: 0.7,
        speed: 1.8,
      })
    }
    // View single point
    if (onSingleView === true) {
      focusMap(hex_id)
    }
    // View multiple selected Land
    if (
      onMultipleLandSelection === true &&
      R.length(multipleLandSelectionList) > 0 &&
      !R.isNil(multipleLandSelectionList)
    ) {
      const featureOfSelectedLands = geojson2h3.h3SetToFeatureCollection(
        multipleLandSelectionList,
      )
      console.log('featureOfSelectedLands', featureOfSelectedLands)
      console.log('multipleLandSelectionList', multipleLandSelectionList)
      const selected_sourceId = 'h3-hexes_multi_selected'
      const selected_layerId = `${selected_sourceId}-layer`
      let selected_source = map.getSource(selected_sourceId)
      if (!selected_source) {
        map.addSource(selected_sourceId, {
          type: 'geojson',
          data: featureOfSelectedLands,
        })
        map.addLayer({
          id: selected_layerId,
          source: selected_sourceId,
          type: 'fill',
          interactive: false,
          paint: {
            'fill-outline-color': '#54c3ea',
            'fill-color': 'rgba(84,195,234,0.3)',
            'fill-opacity': 1,
          },
        })
        selected_source = map.getSource(selected_sourceId)
      }
      selected_source.setData(featureOfSelectedLands)
      map.setLayoutProperty(selected_layerId, 'visibility', 'visible')
    }

    // Render High Zoom grids and Clusters
    // Show hex grid on high zoom
    const zoomThreshold = 17
    const delayedQuery = _.debounce((q) => {
      if (map.getZoom() > zoomThreshold) {
        const hexs = hexagons()
        console.log('hexagons()', hexagons())
        // Render general hexes
        renderHighZoomHexes(hexs)

        // Render owned Lands
        renderHighZoomInterestingHexes(hexs)
      } else {
        renderHighZoomHexes([])
      }
    }, 350)
    map.on('moveend', () => {
      delayedQuery()
    })
  }

  const isMapDiscoverPage =
    R.pathOr(null, ['location', 'pathname'], history) === '/map/discover'

  const isMapLandsPage =
    R.pathOr(null, ['location', 'pathname'], history) === '/map/lands'

  const handleChange = (option) => {
    setSelected(option?.value)
  }

  return (
    <div id="Map" className="Map" style={{ height: '100vh' }}>
      {/* <SelectCollectible selected={selected} onChange={handleChange} /> */}
      {/* <FormControlLabel
        className="hide-markers-switch"
        control={
          <Switch
            checked={hidedMarkers}
            size="small"
            onChange={() => setHidedMarkers((s) => !s)}
            name="checkedB"
            color="primary"
          />
        }
        label={t('Hide.Labels')}
      />
      */}
      {onSingleView || isMapDiscoverPage || isMapLandsPage ? (
        <HexButton
          url="#"
          text={onMultipleLandSelection ? 'holi' : 'boli'}
          className="HexButton  --x-small set-multiple-land-selection-button"
          onClick={
            onMultipleLandSelection
              ? () => alert('/map/discover')
              : () => alert('/map/lands')
          }
        />
      ) : null}
    </div>
  )
}

Map.propTypes = {
  location: PropTypes.object,
  mapProvider: PropTypes.object,
  props: PropTypes.object,
}

export default IndexMaps
