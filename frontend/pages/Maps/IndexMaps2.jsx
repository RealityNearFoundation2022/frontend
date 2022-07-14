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

  useEffect(() => {
    if (map.current) return // initialize map only once
    console.log('use', zoom)
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v9?optimize=true',
      center: [lng, lat],
      zoom,
    })
    prueba(map)
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
    console.log(map.current)
    map.current.on('load', () => {
      // Add a new source from our GeoJSON data and
      // set the 'cluster' option to true. GL-JS will
      // add the point_count property to your source data.
      map.current.addSource('earthquakes', {
        type: 'geojson',
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
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
            if (err) return
            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zm,
            })
            if (zm > 10) {
              getSquare()
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
  const getSquare = () => {
    alert('getSquare')
    const bbox = [-95, 30, -85, 40]
    const cellSide = 0.1
    const options = { units: 'kilometers' }
    console.log('turf', turf)
    const squareGrid = turf(bbox, cellSide, options)
    console.log(' squareGrid ', squareGrid)
    map.current.addSource('national-park', {
      type: 'geojson',
      // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
      // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
      data: squareGrid, // Radius of each cluster when clustering points (defaults to 50)
    })
    map.current.addLayer({
      id: 'park-boundary',
      type: 'fill',
      source: 'national-park',
      paint: {
        'fill-color': '#888888',
        'fill-opacity': 0.4,
      },
      filter: ['==', '$type', 'Polygon'],
    })
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
  }
  return (
    <div className="top">
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      {zoom}
    </div>
  )
}
