import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const useAPI = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        axios.get<T>(url)
            .then((res) => { setData(res.data) })
            .catch((err: AxiosError) => { setError(err.message) })
            .finally(() => { setLoading(false); });
    }, [url]);

    return { data, loading, error };
};

export default useAPI;