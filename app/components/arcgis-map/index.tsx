'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Map from '@arcgis/core/Map'
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import SceneView from '@arcgis/core/views/SceneView'

type ArcGISMapProps = {
  center: [number, number]
  zoom: number
  layerUrls: string[]
}

export default function ArcGISMap(props: ArcGISMapProps) {
  const { center, zoom, layerUrls } = props
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map>()
  const [view, setView] = useState<SceneView>()

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({ basemap: 'streets' })
      const view = new SceneView({
        container: mapRef.current,
        map: map,
        center: center,
        zoom: zoom,
      })
      setMap(map)
      setView(view)
    }
  }, [mapRef])

  useEffect(() => {
    if (map && view) {
      layerUrls.forEach((url) => {
        map.add(new GeoJSONLayer({ url }))
      })
    }
  }, [map, view, layerUrls])

  return <div ref={mapRef} style={{ height: '95vh' }} />
}