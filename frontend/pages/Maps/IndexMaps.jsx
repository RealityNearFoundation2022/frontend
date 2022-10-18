/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import turf from '@turf/square-grid'
import { tokenMapBox } from '../../utils/mapboxUtils'
mapboxgl.accessToken = tokenMapBox
export default function IndexMaps() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-103.5917)
  const [lat, setLat] = useState(40.6699)
  const [zoom, setZoom] = useState(3)
  const [showLand, setShowLand] = useState(true)
  const [selected, setSelected] = useState([])

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
    prueba(map)
  })

  useEffect(() => {
    if (map.current) {
      const zm = map.current.getZoom()
      setZoom(zm)
      map.current.on('zoom', () => {
        if (showLand && zm > 10) {
          setShowLand(false)
          const center = map.current.getCenter()
          getSquare([center.lng, center.lat])
        }
      })
    }
  })
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
  const prueba = () => {
    map.current.on('load', () => {
      map.current.addSource('earthquakes', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      })
      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      })

      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
      })

      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#ffaa00',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      })

      map.current.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'earthquakes', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5,
        },
      })
      // Add a black outline around the polygon.
      map.current.addLayer({
        id: 'outline',
        type: 'line',
        source: 'earthquakes',
        layout: {},
        paint: {
          'line-color': '#000',
          'line-width': 3,
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
          .getSource('earthquakes')
          .getClusterExpansionZoom(clusterId, (err, zm) => {
            const newZoom = zm > 10 ? 19 : zm
            setZoom(newZoom)
            if (err) return
            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: newZoom,
            })
            setLng(features[0].geometry.coordinates[0])
            setLat(features[0].geometry.coordinates[1])
            if (showLand && newZoom > 10) {
              getSquare(features[0].geometry.coordinates)
            }
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
  const getSquare = (coord) => {
    const bbox = [
      coord[0] - 0.002,
      coord[1] - 0.002,
      coord[0] + 0.002,
      coord[1] + 0.002,
    ]
    const cellSide = 0.01
    const options = { units: 'kilometers' }
    const squareGrid = turf(bbox, cellSide, options)
    let source = map.current.getSource('national-park')
    if (!source) {
      map.current.addSource('national-park', {
        type: 'geojson',
        data: squareGrid, // Radius of each cluster when clustering points (defaults to 50)
      })
      // map.current.addLayer({
      //   id: 'park-boundary',
      //   type: 'fill',
      //   source: 'national-park',
      //   paint: {
      //     'fill-color': '#888888',
      //     'fill-opacity': 0.4,
      //   },
      //   filter: ['==', '$type', 'Polygon'],
      // })
      map.current.addLayer({
        id: 'park-boundary-outline',
        type: 'line',
        source: 'national-park',
        layout: {},
        paint: {
          'line-color': '#3d3c3c',
          'line-width': 2,
        },
        filter: ['==', '$type', 'Polygon'],
      })
      source = map.current.getSource('national-park')
    }
    source.setData(squareGrid)
    setShowLand(false)
  }
  return (
    <div className="top">
      {/* <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
