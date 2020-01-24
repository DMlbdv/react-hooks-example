import dateFormat from "dateformat";
import { findMinMax, sortTimeSeries } from "../utils";

export const cityDataToFE = data => {
    const { status, timeseries } = data;
    const { min, max } = findMinMax(timeseries);
    const sortedTimeseries = sortTimeSeries(timeseries);

    return {
        min,
        max,
        status,
        series: sortedTimeseries.map(([date, value]) => ({
            date: dateFormat(date, "dd mmm yyyy"),
            value
        }))
    };
};
