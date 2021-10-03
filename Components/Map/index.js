import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const containerStyle = {
    height: '100vh', width: 'auto'
};

const options = {
    styles: mapStyles,
    //disableDefaultUI: true,
    //zoomControl: true,
};

const center = {
    lat: 59.95, lng: 30.33
};

const Map = ({isLoaded, loadError, panTo, onMapLoad}) => {
    //maps @api
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

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

    // const mapRef = React.useRef();
    // const onMapLoad = React.useCallback((map) => {
    //     mapRef.current = map;
    // }, []);

    // const panTo = React.useCallback(({lat, lng}) => {
    //     mapRef.current.panTo({lat, lng});
    //     mapRef.current.setZoom(14);
    // }, []);

    //map error
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";

    return (
        <div className="py-5 w-full hidden md:block">
            {/* <Locate panTo={panTo} /> */}
            <GoogleMap
                id="map"
                mapContainerStyle={containerStyle}
                center={center}
                options={options}
                zoom={10}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                        //     icon={{
                        //         url: ``,
                        //         origin: new window.google.maps.Point(0, 0),
                        //         anchor: new window.google.maps.Point(15, 15),
                        //         scaledSize: new window.google.maps.Size(30, 30),
                        //     }}
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
        <img src="/compass.svg" alt="compass" />
      </button>
    );
  }

export default Map;
