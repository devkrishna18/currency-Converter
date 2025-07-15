import { useState } from "react";
import { useEffect } from "react";


function currencyconv(currency){
    const [data,setData]=useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
                const data = await res.json();
                setData(data[currency]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [currency]); // Add currency as a dependency
    
    console.log(data);
    return data;

}
export default currencyconv;

