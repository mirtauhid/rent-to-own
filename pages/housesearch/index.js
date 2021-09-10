import React, {useState} from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Pagination from '../../Components/Pagination';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    useJsApiLoader
  } from "@react-google-maps/api";
const libraries = ["places"];
const index = () => {
    const data = [
        {
            id: 1, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 2, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 3, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 4, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 5, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 6, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 7, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 8, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 9, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
        {
            id: 10, title: "Pizza", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 11, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 12, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 13, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 14, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 15, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 16, title: "Burger", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 17, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 18, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 19, title: "Hotdog", host: 'Hosted by Charles E.',  price: 3999 
        },{
            id: 20, title: "Title is much more...", host: 'Hosted by Charles E.',  price: 3999 
        },
    ]
    const containerStyle = {
        height: '100vh', width: 'auto'
      };
      
    const center = {
        lat: 59.95, lng: 30.33
    };
    
    const { isLoaded, loadError } = useLoadScript({
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

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //map error
    if(loadError) return "Error";
    if(!isLoaded) return "Loading";
    return (
        <div className="p-5 relative w-full justify-items-center sm:justify-start">
            <input 
                type="text" 
                className="input text-xs md:pl-20 pl-10 border h-10 max-w-screen-lg w-full" 
                placeholder="Search..." 
            />
            <div className="absolute md:left-12 md:top-8 left-8 top-8">
                <BsSearch className="text-primary" />
            </div>
            <div className="flex smd:flex-row flex-col">
                <div className="grid sm:grid-cols-2 smd:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-5 gap-2 pr-5 lg:pr-0 justify-items-center sm:justify-start">
                    {currentPosts?.map(item => (
                        <div>
                            <ImageCard 
                                key={item.id.toString()} 
                                title={item.title}
                                host={item.host}
                                price={item.price}
                            />
                        </div>
                    ))}
                    
                </div>
                <div className="py-5 w-9/12 pl-5 max-w hidden smd:block lg:w-7/12 xl:w-6/12 justify-items-center sm:justify-start">
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
                            <div className="h-28 w-54">
                                <img src="https://picsum.photos/200/300" alt="" className="w-full" />
                            </div>
                            <p className="text-sm pt-1">Cambium Place 1bed/1bath</p>
                            <p className="text-xs text-gray-400 pt-1">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-xs text-gray-400 pt-1">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-sm pt-1">$3500</p>
                        </div>
                    </InfoWindow>
                    ) : null}
                    </GoogleMap>
                </div>
            </div>
            <div className="grid justify-items-start lg:mr-5">
                        <Pagination 
                            postsPerPage={postsPerPage} 
                            totalPosts={data.length} 
                            paginate={paginate}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
        </div>
        
    )
}

export default index
