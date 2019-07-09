import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';

class MapContainer extends React.Component {

  render() {
    return (
    <Map className="markercluster-map" center={[-37.8370, 144.9980]} zoom={12} maxZoom={18}>
    <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    
    <Marker position={[-37.8520, 144.9980]}>
    <Popup>
    <p>Prahan</p>
    </Popup>
    </Marker>
    <Marker position={[-37.8230, 144.9980]} />
    
    </Map>
    )
  }
}

export default MapContainer;