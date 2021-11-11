import {useEffect, useState} from "react";
import axios from "axios";

const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    async function getCityData() {
        try {
            let res = await axios.get(url)
            setData(res.data.result)
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    }

    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setLoading(true)
        await getCityData()
    }, deps)

    return [data, loading]
}

export default useURLLoader
