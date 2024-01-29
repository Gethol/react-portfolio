import { useEffect, useState } from "react";


export default function Quotes(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

	
    useEffect(() => {

        const fetchData = async () =>{
            const url = "https://api.chucknorris.io/jokes/random";

            try {
                const response = await fetch(url); 
                if(!response.ok){
                    throw new Error("Network not reachable");
                }

                const result = await response.json();
                setData(result.value);   

            } catch (error){
                setError(error);    
            }

        };
        fetchData();
	}, []);
        
    if (error){
        return <p>Error: {error.message}</p>;        
    }
    
    return (
        <div>
            <h2>Chuck Norris Joke</h2>
            <p>
                {data}
            </p>
        </div>
    );
    

}


