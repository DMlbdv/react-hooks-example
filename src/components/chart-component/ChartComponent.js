import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, LabelList } from "recharts";

export default function Chart({ data }) {
    return (
        <div className="barchart-wrapper">
            <BarChart
                width={10000}
                height={250}
                data={data}
                margin={{ top: 20 }}
            >
                <XAxis dataKey="date" />
                <Bar dataKey="value" stackId="value" fill="#2684FF">
                    <LabelList dataKey="value" position="top" />
                </Bar>
            </BarChart>
        </div>
    );
}

Chart.propTypes = {
    data: PropTypes.array.isRequired
};
