import React, {useState, useEffect} from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import HomeLayout from '../../Layouts/HomeLayout';
import 'react-dropdown/style.css';
import { useRouter } from "next/router";
import MapG from '../../Components/Map';
import {
  useLoadScript,
} from "@react-google-maps/api";
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
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from '../../redux/slices/property';
import { getAreas, getFilterLocation } from '../../redux/slices/map';

const HouseSearch = () => {
    const [ libraries ] = useState(['places']);
    const dispatch = useDispatch();
    const router = useRouter()
    const {
        query: { search },
    } = router
    const [searchData, setSearchData] = useState(search ? search : "")
    const properties = useSelector((state) => state.property.allproperties);
    const mapareas = useSelector((state) => state.map.areas);
    const filterLocation = useSelector((state) => state.map.filterLocation);
    console.log('=============mapareas=======================');
    console.log(filterLocation);
    console.log('====================================');

    useEffect(() => {
      dispatch(getProperty());
      dispatch(getAreas({lat: 43.6685934, lng: -79.543553}));
      dispatch(getFilterLocation({lat: 43.6685934, lng: -79.543553}));
  }, [dispatch])

  useEffect(() => {
  },[mapareas])

    //maps
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })
    //refs
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const panTo = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }, []);

    return (
      <HomeLayout>
        <>
          <div className="px-5 md:px-20 lg:px-28 w-full mt-5">
            <div className="relative">
              {isLoaded && <Search panTo={panTo} isLoaded={isLoaded} setSearch={setSearchData} searchData={searchData}/>}
            </div>
          </div>
          <div className="px-5 md:px-20 lg:px-28">
            {/* divide */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div className="py-5">
                </div>
                <div className="">
                  {filterLocation?.map((item) => (
                    <div className="cursor-pointer pb-10" key={item.id}>
                      {/* <Link href={"/housesearch/" + item.id} key={item.id}>
                        <a> */}
                          <ImageCard
                            key={item.id.toString()}
                            item={item}
                            title={item.name}
                            host="host"
                            price={item.price}
                          />
                        {/* </a>
                      </Link> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2">
                <div className="py-5 w-full pl-5 hidden md:block">
                  {mapareas && 
                  <MapG 
                    panTo={panTo} 
                    isLoaded={isLoaded} 
                    loadError={loadError} 
                    onMapLoad={onMapLoad} 
                    mapRef={mapRef}
                    mark={
                      [
                        {
                        lat: parseFloat(mapareas[0]?.latitude),
                        lng: parseFloat(mapareas[0]?.longitude),
                        //time: mapareas[0]?.updatedAt
                        }
                      ]
                    }
                  />}
                </div>
              </div>
            </div>
          </div>
        </>
      </HomeLayout>
    );
}

function Search ({ setSearch, panTo, isLoaded }) {
  const router = useRouter()
    const {
        query: { search },
    } = router

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
  useEffect(() => {
    setValue(search)
  }, [search])

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
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
          style={{ borderWidth: 2 }}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }, index) => (
                  <ComboboxOption key={index} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>}
    </div>
  );
}

export default HouseSearch;
