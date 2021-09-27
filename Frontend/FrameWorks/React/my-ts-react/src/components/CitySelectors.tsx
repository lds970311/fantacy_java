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
    const [data, loading] = useURLLoader("http://iwenwiki.com/wapicovid19/citys.php?key=171e165a7d991c5f6ecd5194c54778ef", [])
    const result = data as IProvinceInfo[]

    /* function handleChange(id: string) {
         console.log(id)
     }*/

    const renderOptions = (): JSX.Element[] => {
        console.log(result)

        return result.map((province: any) => {
            return (
                <option value={province.province_id} key={province.province_id}>
                    {province.province}
                </option>
            )
        })
    }

    return (
        <div className="city-selector">
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <select name="city" id="city">
                    {renderOptions()}
                </select>
            )}
        </div>
    );
};

export default CitySelectors;
