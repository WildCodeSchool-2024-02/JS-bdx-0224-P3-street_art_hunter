import { useState } from "react";
import { Autocomplete, Textfield } from "@mui/lab";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

import "../style/SearchBar.css";

function SearchBar() {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromApi = () => {
    fetch("http://fausseurl.com")
      .then((response) => response.json())
      
      .then((res) => {
      
        const options = res.data.map((item) => item.address);
        setMyOptions(options);
      });
  };

  return (
    <Autocomplete
      freeSolo
      autoComplete
      autoHighlight
      options={myOptions}
      renderInput={(params) => (
        <Textfield
          InputProps={params.InputProps}
          InputLabelProps={params.InputLabelProps}
          onChange={(event) => {
            params.inputProps.onChange(event);
            getDataFromApi();
          }}
          variant="outlined"
          label="SearchBox"
          className="search-input"
        />
      )}
    />
  );
}


export default SearchBar;
