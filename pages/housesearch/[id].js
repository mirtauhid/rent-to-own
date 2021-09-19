import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import PriceCard from '../../Components/SubCard/PriceCard';
import PopularProperties from '../../Components/SubCard/PopularProperties';
import SubCapacity from '../../Components/SubPage/HouseSearch/SubCapacity';
import SubAmenitie from '../../Components/SubPage/HouseSearch/SubAmenitie';
import Introduction from '../../Components/SubPage/HouseSearch/Introduction';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

const libraries = ["places"];

const Details = () => {
    const data = require('./data');
    const containerStyle = {
        height: '100vh', width: 'auto'
    };

    const center = {
        lat: 59.95, lng: 30.33
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBR5-gY1SoOvSodRms0PISuSmfRz7zM5fQ',
        libraries,
    })

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

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);

    //map error
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";

    //scrolling
    const Arrow = ({
        children,
        disabled,
        onClick
      }) => {
        return (
          <button
            disabled={disabled}
            onClick={onClick}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              right: "1%",
              opacity: disabled ? "0" : "1",
              userSelect: "none"
            }}
          >
            {children}
          </button>
        );
      }
      
    const LeftArrow = () => {
        const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)
      
        return (
          <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <FaCaretLeft />
          </Arrow>
        );
    }
      
    const RightArrow = () => {
        const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)
        
        return (
            <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <FaCaretRight />
            </Arrow>
        );
    }
    return (
        <HomeLayout>
        <>
            <div className="container px-3 mx-auto p-5 relative w-full">
                {/* Images */}
                <div className="flex flex-row">
                    <img src="https://picsum.photos/600/400" className="w-1/2 object-center object-cover" />
                    <div className="flex flex-end">
                        <div className="w-full">
                            <img src="https://picsum.photos/400" className=""/>
                            <img src="https://picsum.photos/400/200" />
                        </div>
                        <div className="w-full">
                            <img src="https://picsum.photos/400/200" />
                            <img src="https://picsum.photos/400" />
                        </div>
                    </div>
                </div>
                <div className="md:flex md:flex-row flex-column pt-6">
                    {/* Introduction */}
                    <div className="w-full md:w-2/3">
                        <Introduction />
                        <hr className="mt-2"></hr>
                        {/* Capacity */}
                        <SubCapacity />
                        <hr className="mt-5"></hr>
                        {/* Amenitie */}
                        <SubAmenitie />
                        <hr className="mt-5"></hr>
                        {/* Interior features */}
                        <div className="mt-5">
                            <h1 className="text-xl text-gray-400 font-bold">Interior features</h1>
                            <div className="mt-4 flex justify-between">
                                <p className="text-md">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <p className="text-md">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                            </div>
                        </div>
                        <hr className="mt-5"></hr>
                        {/* Exterior features */}
                        <div className="mt-5">
                            <h1 className="text-xl text-gray-400 font-bold">Exterior features</h1>
                            <div className="mt-4 flex justify-between">
                                <p className="text-md">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <p className="text-md">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                                <p className="text-md ml-4">Entire home</p>
                            </div>
                        </div>
                        <hr className="mt-5"></hr>
                    </div>

                    {/* price Card */}
                    <div className="md:w-1/3 md:ml-10 mt-10 md:mt-0">
                        <PriceCard />
                    </div>
                </div>
            </div>
            
            
            {/* Location */}
            <div className="container mx-auto px-3">
            <h1 className="text-xl text-gray-700 font-bold mt-5">Location</h1>
                <div className="py-5 w-full hidden md:block">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
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
                                icon={{
                                    url: ``,
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(15, 15),
                                    scaledSize: new window.google.maps.Size(30, 30),
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
                </div>
            </div>
             {/* popular properties */}
            <div className="container mx-auto py-5">
                <h1 className="text-xl text-gray-700 font-bold mt-5">Some Popular properties</h1>
                <ScrollMenu
                >
                    {data?.map(item => (
                        <div className="cursor-pointer gap-8 grid-flow-row py-5">
                            <Link href={'/housesearch/' + item.id} key={item.id}>
                                <a>
                                    <PopularProperties 
                                        key={item.id.toString()}
                                        title={item.title}
                                        host={item.host}
                                        price={item.price}
                                    />
                                </a>
                            </Link>
                        </div>
                    ))}
                </ScrollMenu>
            </div>

        </>
        </HomeLayout>
    )
}

export default Details;
