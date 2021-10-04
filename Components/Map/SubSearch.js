import {
  Combobox,
  ComboboxInput, ComboboxList,
  ComboboxOption, ComboboxPopover
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  useLoadScript
} from "@react-google-maps/api";
import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import style from './style.module.css';
  const libraries = ["places"];

const Search = ({ setSearch, setLatLng, setLocationData, inputPlaceholder }) => {
      const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
        libraries,
      })
      const mapRef = React.useRef();
      const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
      }, []);

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
  
      try {
        setSearch(address);
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setLocationData(results);
        // panTo({ lat, lng });
        setLatLng({lat, lng})
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
            placeholder={inputPlaceholder ? inputPlaceholder : "Search city"}
            style={{ width: '70%' }}
            id="search_input"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description },index) => (
                  // <Link
                  //   key={id}
                  //   href={{
                  //     pathname: "/housesearch",
                  //     query: { search: description },
                  //   }}
                  // >
                    <ComboboxOption key={index.toString()} value={description} /> 
                  //</Link>
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>}
      </div>
    );
  }

  export default Search;