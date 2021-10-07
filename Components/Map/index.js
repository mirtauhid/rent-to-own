import React, {useEffect, useState} from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { BiCurrentLocation } from "react-icons/bi";

const containerStyle = {
    height: '100vh', width: 'auto'
};

const options = {
    styles: mapStyles,
    //disableDefaultUI: true,
    //zoomControl: true,
};

const Map = ({isLoaded, loadError, panTo, onMapLoad, mark, mapRef}) => {
    const center1 = {
        lat: 59.95, lng: 30.33
    };
    //maps @api
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [center , setCenter] = React.useState(center1);
    const [zoom, setZoom] = React.useState(10);
    const [coordinates, setCoordinates] = useState();
    console.log('=============markers=======================');
    console.log(markers);
    console.log(center);
    console.log('====================================');

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
            setZoom(8);
        }
    },[markers])

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    //map error
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";

    return (
        <div className="py-5 w-full hidden md:block relative">
            <GoogleMap
                id="map"
                mapContainerStyle={containerStyle}
                center={center}
                options={options}
                zoom={zoom}
                //onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {/* <Locate panTo={panTo} /> */}
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                    />
                ))}

                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                        <div>
                            <div className="h-28">
                                <img src="https://picsum.photos/200" alt="" className="w-full h-2/3" />
                            </div>
                            <div>
                            <p className="text-sm pt-1">Cambium Place 1bed/1bath</p>
                            <p className="text-xs text-gray-400 pt-1">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-xs text-gray-400 pt-1">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-sm pt-1">$3500</p>
                            </div>
                        </div>
                    </InfoWindow>
                ) : null}
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
