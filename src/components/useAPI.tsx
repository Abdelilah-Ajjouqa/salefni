import axios from "axios";
import { useEffect, useState } from "react";

const useAPI = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then((res) => { setData(res.data) })
            .catch((err) => { setError(err) })
    }, [url])

    return [data, error];
}

export default useAPI;