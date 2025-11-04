import axios from "axios";
import { useState, useEffect } from "react";

export default function useCreditTypes() {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            axios.get("http://localhost:3000/creditTypes")
                .then(res => setData(res.data))
                .catch(err => setError(err))
        };
        getData();
    }, [])

    return { data, error }
}