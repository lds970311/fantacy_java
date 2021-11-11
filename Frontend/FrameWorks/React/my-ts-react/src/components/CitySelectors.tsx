import React from 'react';
import useURLLoader from "../hooks/useURLLoader";

interface ICityInfo {
    city: string;
    city_id: string
}

interface IProvinceInfo {
    citys: ICityInfo[]
    province: string
    province_id: string
}

const CitySelectors: React.FunctionComponent = () => {


    return (
        <div className="city-selector">

        </div>
    )

};

export default CitySelectors;
