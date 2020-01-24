import React, { useState } from "react";
import Select from "react-select";
import useAPI from "./hooks/useAPI";
import CityData from "./components/city-data/CityData";
import MDSpinner from "react-md-spinner";
import { API } from "./CONSTS";

import "./App.css";

function App() {
    const [city, setCity] = useState(null);
    const { data, isLoading, isError } = useAPI({ url: API.CITY_LIST });

    const cityList = data.map(it => ({ value: it.id, label: it.title }));

    const selectCity = city => {
        setCity(city);
    };

    return isLoading ? (
        <div className="d-flex whole-wp justify-content-center align-items-center">
            <MDSpinner />
        </div>
    ) : isError ? (
        <div className="d-flex justify-content-center">
            SERVER ERROR: Something went wrong ...
        </div>
    ) : (
        <div className="main-container">
            <div className="city-list">
                <Select
                    className="city-select"
                    value={city}
                    onChange={selectCity}
                    options={cityList}
                    placeholder="Select City..."
                />
            </div>
            <div className="city-data">
                {city && <CityData cityList={data} cityId={city.value} />}
            </div>
        </div>
    );
}

export default App;
