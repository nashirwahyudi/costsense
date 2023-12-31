import { MapContainer, Marker, Popup, TileLayer, GeoJSON, bbox } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// import geojson from 'public/assets/indonesia-province.json'

import geojson from 'public/assets/bpjs23.json'
import { useEffect, useRef, useState } from 'react'
import Legend from './Legend'
import MapHelper from '../../helper/MapHelper.js'

const Map = () => {
  const jsonRef = useRef(null)
  const [map, setMap] = useState(null)

  return (
    <div className='row col-12'>
      <MapContainer
        center={[0.076408, 116.679275]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: '40vh', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON
          data={geojson}
          ref={jsonRef}
          style={data => {
            return {
              opacity: 1,
              fillColor: MapHelper.getColor(data.properties.field_3),
              fillOpacity: 0.7,
              weight: 0.5
            }
          }}
          onEachFeature={(feature, layer) => {
            const popupOptions = {
              minWidth: 100,
              maxWidth: 250,
              className: 'popup-classname'
            }
            layer.bindPopup(() => {
              return `<p><strong>${feature.properties.field_2} (${feature.properties.field_1})</strong></p><p>Jumlah Kunjungan: <strong>${feature.properties.field_3}</strong></p>`
            }, popupOptions)
            layer.on('mouseover', e => {
              e.target.setStyle({ fillOpacity: 0.4 })
            })
            layer.on('mouseout', e => {
              e.target.setStyle({ fillOpacity: 0.7 })
            })
          }}
        />
        <Legend map={map} />
      </MapContainer>
    </div>
  )
}

export default Map