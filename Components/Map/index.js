import React, {useEffect} from 'react';
import {
    GoogleMap,
    Marker,
    Circle
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { BiCurrentLocation } from "react-icons/bi";

const containerStyle = {
    height: '100vh', width: 'auto'
};

const options = {
    styles: mapStyles,
};
const optionsCircle = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000',
    fillOpacity: 1,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 50000,
    zIndex: 1
  }

const Map = ({isLoaded, loadError, panTo, onMapLoad, mark}) => {
    const initialcenter = {
        lat: 51.0407822, lng: -114.0694058
    };
    //maps @api
    const [markers, setMarkers] = React.useState([]);
    const [center , setCenter] = React.useState(initialcenter);
    const [zoom, setZoom] = React.useState(9);

    useEffect(() => {
        const holder = [];
        mark?.map(item =>{
          holder.push({
            lat: parseFloat(item.PropertyAddresses[0].latitude),
            lng: parseFloat(item.PropertyAddresses[0].longitude)
          })
        })
        setMarkers(holder);
        if(holder){
            setCenter(holder[0])
        }
      },[mark])

    useEffect(() => {
        if(markers && markers[0] && panTo){
            //panTo(markers[0]);
            setCenter(markers[0])
            setZoom(9);
        }
    },[markers])

    //map error
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";
    const onLoad = circle => {
    }
    
    const onUnmount = circle => {
    }

    return (
        <div className="py-5 w-full hidden md:block relative">
            <GoogleMap
                id="map"
                mapContainerStyle={containerStyle}
                center={center}
                options={options}
                zoom={zoom}
                onLoad={onMapLoad}
            >
                <Circle
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    center={center}
                    options={optionsCircle}
                />
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />
                ))}
            </GoogleMap>
            <div className="absolute left-5 bottom-8">
                {markers && <Locate panTo={panTo} />}
            </div>
        </div>
    )
}

function Locate({ panTo }) {
    return (
      <button
        className="locate"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
            panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <BiCurrentLocation size={32}/>
      </button>
    );
  }

export default Map;
