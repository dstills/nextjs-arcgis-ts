'use client'
import React from 'react'
import { useState } from 'react'
// import ReactLeafletMap from '../components/react-leaflet-map'
import ArcGISMap from '../components/arcgis-map'
import Header from '../components/header'


export default function Home() {
  const [center, setCenter] = useState<[number, number]>([0,0])
  const [zoom, setZoom] = useState(5)
  const [layers, setLayers] = useState(['http://localhost:3001/features/photos'])

  return (
    <>
      <Header/>
      {/* <ReactLeafletMap center={center} zoom={zoom} layers={layers}/> */}
      <ArcGISMap center={center} zoom={zoom} layerUrls={layers}/>
    </>
  )
}