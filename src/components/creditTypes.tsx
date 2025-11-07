import useAPI from "./useAPI";
import type { CreditTypes } from "../types/types";



const creditTypes = () => {
    const [data, error] = useAPI<CreditTypes[]>("http://localhost:3000/creditTypes")
    if (error) {
        throw new Error(`cannot fetching api, ${error}`);
    }

    if (!data) {
        throw new Error(`no data found, ${data}`);
    }

    return (
        <>
            <ul>
                {data.map((d: any) => (
                    <li>
                        <h2>{d.id}</h2>
                        <strong>{d.label}</strong>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default creditTypes;