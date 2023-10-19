'use client'
import React from 'react'
import { useContext } from 'react'
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapProps = {
    center: [number, number],
    zoom: number,
    layers: string[]
}

export default function Map({ center, zoom, layers }: MapProps) {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '95vh' }}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {layers.map((layer, index) => {
                return <GeoJSON key={index} data={layer} />
            })}
        </MapContainer>
    )
}