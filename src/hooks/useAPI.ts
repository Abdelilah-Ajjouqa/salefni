import axios from "axios";
import { useState, useEffect } from "react";

export default function useAPI(url: string) {
    const [data, setData] = useState<any | undefined>(undefined);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
            .catch(error => setError(error));
    }, [url])

    return { data, error }
}