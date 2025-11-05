import useAPI from "../hooks/useAPI";

function CreditTypes(){
    const { data, error } = useAPI("http://localhost:3000/creditTypes");

    if (error){ 
        console.error(`Error: ${error.message}`)
        return <div>Error loading data</div>;
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    console.log(data)
    return (
        <div>
            <h1>Credits types: </h1>
            <ul>
                {data.map((d: any)=>(
                    <div>
                        <p>{d.id}</p>
                        <h2>{d.label}</h2>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default CreditTypes;