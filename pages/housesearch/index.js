import React, {useState} from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import {BsSearch} from "react-icons/bs";
import Pagination from '../../Components/Pagination';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useRouter } from "next/router"

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

const libraries = ["places"];

const index = () => {
    const router = useRouter()
    const {
        query: { search },
    } = router
    const [searchData, setSearchData] = useState(search ? search : "")
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
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";

    const options = [
        'Price', 'Title', 'Time'
    ];
    const defaultOption = options[0];
    
    return (
      <HomeLayout>
        <>
          <div className="px-5 md:px-20 lg:px-28 w-full mt-5">
            <div className="relative">
              <input
                type="text"
                className="text-xs md:pl-10 pl-10 border rounded shadow h-10  w-full focus:outline-none"
                placeholder="Search..."
                value={searchData}
                name="search"
                onChange={setSearchData}
              />
              <div className="absolute text-primary left-0 top-3 pl-3">
                <BsSearch color={"#00dbb1"} />
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 lg:px-28">
            {/* divide */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3">
                <div className="py-5 flex justify-between">
                  <p className="text-sm text-gray-500">1-6 of 300+</p>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center mr-3">
                      <p className="text-sm text-gray-500">Sort</p>
                    </div>
                    <Dropdown
                      className="text-xs text-gray-500"
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="grid  smd:grid-cols-2 justify-center md:grid-cols-2 lg:grid-cols-3  gap-7 smd:gap-4">
                  {currentPosts?.map((item) => (
                    <div className="cursor-pointer" key={item.id}>
                      <Link href={"/housesearch/" + item.id} key={item.id}>
                        <a>
                          <ImageCard
                            key={item.id.toString()}
                            title={item.title}
                            host={item.host}
                            price={item.price}
                          />
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="grid py-5 lg:mr-5">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="py-5 w-full pl-5 hidden md:block">
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
                            <img
                              src="https://picsum.photos/200/300"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <p className="text-sm pt-1">
                            Cambium Place 1bed/1bath
                          </p>
                          <p className="text-xs text-gray-400 pt-1">
                            4 guests 2 bedrooms 2 beds 2 baths
                          </p>
                          <p className="text-xs text-gray-400 pt-1">
                            4 guests 2 bedrooms 2 beds 2 baths
                          </p>
                          <p className="text-sm pt-1">$3500</p>
                        </div>
                      </InfoWindow>
                    ) : null}
                  </GoogleMap>
                </div>
              </div>
            </div>
          </div>
        </>
      </HomeLayout>
    );
}

export default index
