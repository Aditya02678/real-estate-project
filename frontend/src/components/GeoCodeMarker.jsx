import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaultIcon

const GeoCodeMarker = ({ address }) => {
    const map = useMap()
    const [position, setPosition] = useState([20.5937, 78.9629])  // center of India

    useEffect(() => {
        if(!address) return

        console.log("Searching for:", address)

        fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
            {
                headers: {
                    'Accept-Language': 'en',
                    'User-Agent': 'RealEstateApp'  // ✅ required by Nominatim
                }
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log("Result:", data)
            if(data && data.length > 0){
                const lat = parseFloat(data[0].lat)
                const lng = parseFloat(data[0].lon)
                console.log("lat:", lat, "lng:", lng)
                setPosition([lat, lng])
                map.flyTo([lat, lng], 8)
            }
        })
        .catch((err) => console.log("Geocode error:", err))

    }, [address])

    return (
        <Marker position={position} icon={DefaultIcon}>
            <Popup>{address}</Popup>
        </Marker>
    )
}

export default GeoCodeMarker