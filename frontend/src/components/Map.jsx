import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import GeoCodeMarker from './GeoCodeMarker'

const Map = ({address,city}) => {
  return (


<MapContainer
 

 center={[20.5937,78.9629]}
zoom={4}
scrollWheelZoom={false}
className='h-[24rem] w-full mt-5 z-0'
>


  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
 
 <GeoCodeMarker address={`${address} ${city} `}/>

</MapContainer>

)
}

export default Map