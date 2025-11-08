import useAPI from "./useAPI";
import type { CreditTypesInterface } from "../types/types";

const CreditTypes: React.FC = () => {
    const {data, loading, error }= useAPI<CreditTypesInterface[]>("http://localhost:3000/creditTypes")

    if (loading){
        return <p>Loading data from credit types</p>
    }

    if (error) {
        return <p className="text-red-500">Error fetching credit types: {error}</p>
    }

    if (!data) {
        return <p>No credit types found</p>
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