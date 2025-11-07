import useAPI from "./useAPI";
import type { CreditTypesInterface } from "../types/types";

const CreditTypes = () => {
    const [data, error] = useAPI<CreditTypesInterface[]>("http://localhost:3000/creditTypes")
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

export default CreditTypes;