import React from 'react';
import Link from 'next/link';
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

const index = () => {
    const [search, setSearch] = React.useState("");
    const [gmapsLoaded, setGmapsLoaded] = React.useState(false);
    const onChangeValue = e => {
        setSearch(e.target.value);
    }
    const mapRef = React.useRef();
    const panTo = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }, []);
    React.useEffect(() => {
      window.initMap = () => setGmapsLoaded(true)
      const gmapScriptEl = document.createElement(`script`)
      gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBR5-gY1SoOvSodRms0PISuSmfRz7zM5fQ&libraries=places&callback=initMap`
      document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    }, [])

    return (
      <div className="px-5 md:px-20 lg:px-28">
        <div className="relative rounded-md h-60 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="/images/Homepage/Background.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full px-5 md:px-12 pt-10 md:pt-16 lg:pt-28"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <p className="text-white text-xl md:text-3xl lg:text-5xl lg:w-3/4 xl:w-1/2  font-bold">
              Canada's Only Rent-to-Own Marketplace
            </p>
            <div className="mt-5 lg:mt-10">
              <Search/>
              <Link
                href={{
                  pathname: "/housesearch",
                  query: { search: search },
                }}
              >
                <div className="bg-green-500 w-32 mt-3 py-2 rounded-md px-10 text-white font-bold">
                  Search
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

function Search({ panTo }) {
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
    // setValue(address, false);
    // clearSuggestions();

    try {
      console.log(address)
      // const results = await getGeocode({ address });
      // const { lat, lng } = await getLatLng(results[0]);
      // panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className={style["search"]}>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          placeholder="Search city"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default index
