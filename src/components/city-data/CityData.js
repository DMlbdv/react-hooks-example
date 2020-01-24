import React from "react";
import PropTypes from "prop-types";
import Chart from "../chart-component/ChartComponent";
import MDSpinner from "react-md-spinner";
import useAPI from "../../hooks/useAPI";
import { getName } from "../../utils";
import { cityDataToFE } from "../../mappers";

import { API } from "../../CONSTS";

function CityData({ cityList, cityId }) {
    const { data, isLoading, isError } = useAPI({
        url: `${API.CITY_DATA}${cityId}`
    });

    const { min, max, status, series } =
        !isLoading && !isError && cityDataToFE(data);
    const counryName = !isLoading && !isError && getName(cityList, cityId);

    return isLoading ? (
        <div className="d-flex whole-wp justify-content-center align-items-center">
            <MDSpinner />
        </div>
    ) : isError ? (
        <div className="d-flex justify-content-center">
            SERVER ERROR: Something went wrong ...
        </div>
    ) : (
        <>
            <div className="data">
                <div>
                    <b>City Name:</b> {counryName}
                </div>
                <div>
                    <b>Status:</b> {status}
                </div>
                <div>
                    <b>Highest value:</b> {max}
                </div>
                <div>
                    <b>Lowest value:</b> {min}
                </div>
            </div>
            <Chart data={series} />
        </>
    );
}

CityData.propTypes = {
    cityList: PropTypes.array.isRequired,
    cityId: PropTypes.string.isRequired
};

export default CityData;
