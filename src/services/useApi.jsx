import { useState, useEffect } from "react"

const useApi = (url) => {

    const [data, setData] = useState(null);
    useEffect(()=> {
        const getData = async(url) =>{
            try {
                const response = await fetch (url);
                if(!response.ok) {
                    throw new Error(`Error! Status: ${response.status}`);
                }
                const json_data = await response.json();
                setData(json_data);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
        getData(url);
    }, [url]);
    return {data}
}

export default useApi;
