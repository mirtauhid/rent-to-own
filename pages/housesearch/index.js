import React, {useState} from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import {BsSearch} from "react-icons/bs";
import Pagination from '../../Components/Pagination';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useRouter } from "next/router";
import MapG from '../../Components/Map';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from "../../Components/Map";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import style from './style.module.css';

const libraries = ["places"];
const containerStyle = {
  height: '100vh', width: 'auto'
};

const options1 = {
  styles: mapStyles,
  //disableDefaultUI: true,
  //zoomControl: true,
};

const center = {
  lat: 59.95, lng: 30.33
};

const index = () => {
    const router = useRouter()
    const {
        query: { search },
    } = router
    const [searchData, setSearchData] = useState(search ? search : "")
    const data = require('./data');

    //maps
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })
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

    const options = [
        'Price', 'Title', 'Time'
    ];
    const defaultOption = options[0];

    const handleChange = event => {
      setSearchData(event.target.value)
    }

    //map error
    if (loadError) return "Error";
    if (!isLoaded) return "Loading";
    
    return (
      <HomeLayout>
        <>
          <div className="px-5 md:px-20 lg:px-28 w-full mt-5">
            <div className="relative">
              {/* <input
                type="text"
                className="text-xs md:pl-10 pl-10 border rounded shadow h-10  w-full focus:outline-none"
                placeholder="Search..."
                value={searchData}
                name="search"
                onChange={handleChange}
              />
              <div className="absolute text-primary left-0 top-3 pl-3">
                <BsSearch color={"#00dbb1"} />
              </div> */}
              {isLoaded && <Search panTo={panTo} isLoaded={isLoaded}/>}
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
                  {/* <MapG panTo={panTo} isLoaded={isLoaded} loadError={loadError} onMapLoad={onMapLoad}/> */}
                  <GoogleMap
                    id="map"
                    mapContainerStyle={containerStyle}
                    center={center}
                    //options={options1}
                    zoom={10}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                  > 
                    <Locate panTo={panTo} />
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
              </div>
            </div>
          </div>
        </>
      </HomeLayout>
    );
}

function Search ({ setSearch, panTo, isLoaded }) {
    const onChangeValue = e => {
        setSearch(e.target.value);
    }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log(address);
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className={style["search"]}>
      { isLoaded && <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          placeholder="Search city"
          style={{ width: '70%' }}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                // <Link
                //   key={id}
                //   href={{
                //     pathname: "/housesearch",
                //     query: { search: description },
                //   }}
                // >
                  <ComboboxOption key={id} value={description} />
                //</Link>
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>}
    </div>
  );
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
      <img src="/svgs/listProperty/9701.svg" alt="compass" />
    </button>
  );
}

export default index
