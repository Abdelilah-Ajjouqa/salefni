import axios from "axios";
import { useState } from "react";

const useAPI = (url: string) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null)

    axios.get(url)
        .then((res)=>{setData(res.data)})
        .catch((err)=>{setError(err)})

    return [data, error];
}

export default useAPI;