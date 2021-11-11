import {useMemo, useState} from 'react';
import axios from "axios";

const useMockData = (url: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)

    useMemo(async () => {
        try {
            setLoading(true)
            const result = await axios.get(url)
            setData(result.data.address)
            setLoading(false)
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }, [url]);

    return [data, loading]
};

export default useMockData;
