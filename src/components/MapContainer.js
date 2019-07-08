import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';

class MapContainer extends React.Component {

  render() {
    return (
    <Map className="markercluster-map" center={[-37.814, 144.96332]} zoom={13} maxZoom={18}>
    <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    
    <Marker position={[-37.805, 144.96331]}>
    <Popup>
    <p>This is an address</p>
    </Popup>
    </Marker>
    <Marker position={[-37.802, 144.96335]} />
    <Marker position={[-37.814, 144.96332]} />
    
    </Map>
    )
  }
}

export default MapContainer;