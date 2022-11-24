import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import turf from '@turf/square-grid'
import { useNavigate } from 'react-router-dom'
import { tokenMapBox } from '../../utils/mapboxUtils'
import {
  styleClusters,
  styleClustersCount,
  styleUnclusterPoint,
} from './StylesMap'
import ModalBuy from '../../components/ModalBuy'

mapboxgl.accessToken = tokenMapBox
export default function IndexMaps() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-103.5917)
  const [lat, setLat] = useState(40.6699)
  const [zoom, setZoom] = useState(3)
  const [showLand, setShowLand] = useState(true)
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11?optimize=true',
      center: [lng, lat],
      zoom,
      tileLayer: {
        continuousWorld: false,
        noWrap: true,
      },
    })
    drawMap(map)
  })

  useEffect(() => {
    if (map.current) {
      const zm = map.current.getZoom()
      // let newZoom = zm
      // console.log(':)', zm, showLand)
      // if (zm > 10 && zm < 17 && showLand) {
      //   newZoom = 10
      //   map.current.easeTo({
      //     zoom: newZoom,
      //   })
      //   setShowLand(false)
      // } else if (zm > 10 && !showLand) {
      //   console.log('1')
      //   newZoom = 20
      //   const center = map.current.getCenter()
      //   map.current.easeTo({
      //     zoom: newZoom,
      //   })
      //   getSquare([center.lng, center.lat], newZoom)
      //   setShowLand(true)
      // }
      // map.current.on('zoom', () => {
      //   if (showLand && newZoom >= 19) {
      //     const center = map.current.getCenter()
      //     getSquare([center.lng, center.lat], newZoom)
      //     setShowLand(false)
      //   }
      // })
      const newZoom = zm > 10 && showLand ? 19 : zm
      console.log('zoom 1', newZoom, showLand)
      setZoom(newZoom)
      map.current.easeTo({
        zoom: newZoom,
      })
      map.current.on('zoom', () => {
        console.log('zoom 2', newZoom)
        if (showLand && newZoom >= 19) {
          const center = map.current.getCenter()
          getSquare([center.lng, center.lat], zm)
          // setShowLand(false)
        }
      })
    }
  })
  const handleClose = () => {
    setOpen(false)
  }
  const goToPlot = (position) => {
    navigate(`/nuruk/${position}`)
  }
  const searchSquare = (latitude, longitude) => {
    const sourceData = map.current.getSource('national-park')
    let id
    if (sourceData?._data?.features?.length) {
      const newSelected = sourceData?._data?.features?.find(({ geometry }) => {
        const { coordinates } = geometry
        const xInf = coordinates[0][0][0]
        const xSup = coordinates[0][3][0]
        const yInf = coordinates[0][0][1]
        const yMax = coordinates[0][1][1]
        const isThere =
          yInf < latitude &&
          latitude < yMax &&
          xInf < longitude &&
          longitude < xSup
        if (isThere) {
          id = `grid${xInf}${xSup}${yInf}${yMax}`
        }
        return isThere
      })
      setSelectedId(id)
      let features = selected
      let featuresData = [{ id, ...newSelected }]
      const isSelected = selected.some((e) => e.id === id)
      if (isSelected) {
        features = features.filter((e) => e.id !== id)
        featuresData = []
      } else {
        features.push({ id, ...newSelected })
      }
      setSelected(features)
      let source = map.current.getSource(`grid${id}`)

      const data = { type: 'FeatureCollection', features: featuresData }
      if (!source) {
        map.current.addSource(`grid${id}`, {
          type: 'geojson',
          data,
        })
        map.current.addLayer({
          id: `selected${id}`,
          type: 'fill',
          source: `grid${id}`,
          paint: {
            'fill-color': '#2e0aff',
            'fill-opacity': 0.2,
          },
          filter: ['==', '$type', 'Polygon'],
        })
        source = map.current.getSource(`grid${id}`)
      }
      source.setData(data)
      setOpen(true)
    }
  }
  useEffect(() => {
    let onClickMap
    if (map.current) {
      onClickMap = (e) => {
        if (zoom > 17) {
          searchSquare(e.lngLat.lat, e.lngLat.lng)
        }
      }
      map.current.on('click', onClickMap)
    }
    return () => {
      if (map.current) {
        map.current.off('click', onClickMap)
      }
    }
  })
  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      // setZoom(map.current.getZoom().toFixed(2))
    })
  })
  const drawMap = () => {
    map.current.on('load', () => {
      map.current.addSource('patchas-bought', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson', //mock
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      })
      // agrupados
      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'patchas-bought',
        filter: ['has', 'point_count'],
        paint: styleClusters,
      })
      //letras de los agrupados
      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'patchas-bought',
        filter: ['has', 'point_count'],
        layout: styleClustersCount,
      })
      // circulos unitarios
      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'patchas-bought',
        filter: ['!', ['has', 'point_count']],
        paint: styleUnclusterPoint,
      })
      // Add a black outline around the polygon.
      map.current.addLayer({
        id: 'outline',
        type: 'line',
        source: 'patchas-bought',
        layout: {},
        paint: {
          'line-color': '#00000',
          'line-width': 5,
        },
      })
      //
      // inspect a cluster on click
      map.current.on('click', 'clusters', (e) => {
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        })
        const clusterId = features[0].properties.cluster_id
        map.current
          .getSource('patchas-bought')
          .getClusterExpansionZoom(clusterId, (err, zm) => {
            const newZoom = zm > 10 ? 20 : zm
            setZoom(newZoom)
            if (err) return
            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: newZoom,
            })
            setLng(features[0].geometry.coordinates[0])
            setLat(features[0].geometry.coordinates[1])
          })
      })

      map.current.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice()
        const { mag } = e.features[0].properties
        const tsunami = e.features[0].properties.tsunami === 1 ? 'yes' : 'no'

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
          .addTo(map.current)
      })

      map.current.on('mouseenter', 'clusters', () => {
        map.current.getCanvas().style.cursor = 'pointer'
      })
      map.current.on('mouseleave', 'clusters', () => {
        map.current.getCanvas().style.cursor = ''
      })
    })
  }
  const getSquare = (coord, newZoom) => {
    const x = Math.round(coord[0] * 100) / 100
    const y = Math.round(coord[1] * 100) / 100
    const bbox = [x - 0.005, y - 0.005, x + 0.005, y + 0.005]
    const cellSide = 0.01
    const options = { units: 'kilometers' }
    const squareGrid = turf(bbox, cellSide, options)
    console.log(squareGrid)
    let source = map.current.getSource('national-park')
    if (!source) {
      map.current.addSource('national-park', {
        type: 'geojson',
        data: squareGrid, // Radius of each cluster when clustering points (defaults to 50)
      })
      map.current.addLayer({
        id: 'park-boundary-outline',
        type: 'line',
        source: 'national-park',
        layout: {},
        paint: {
          'line-color': '#000000',
          'line-width': 3,
        },
        filter: ['==', '$type', 'Polygon'],
      })
      source = map.current.getSource('national-park')
    }
    source.setData(squareGrid)
    if (newZoom < 18) {
      setShowLand(false)
    }
  }
  return (
    <div className="top">
      {/* <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container" />
      <ModalBuy
        open={open}
        handleClose={handleClose}
        go={() => goToPlot(selectedId)}
        idX={selectedId}
        idY={selectedId}
      />
    </div>
  )
}
