import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price() {

    // API Key
    const apiKey = `DBB7F384-EA45-4F83-A4B9-1C4BDD3F5559`;

    // Grab currency symbol from URL param
    const params = useParams();
    const symbol = params.symbol;

    // Using 'params' and symbol' variable to create URL
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
    // State to hold coin data
    const [coin, setCoin] = useState('null');

    // Function to fetch coin data
    async function getCoin() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            setCoin(data);
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getCoin();
    }, []);

    // loaded function for when data is fetched 
    function loaded() {
        return (
            <div>
                <h1>
                    {coin.asset_id_base} / {coin.asset_id_quote}
                </h1>
                <h2>
                    {coin.rate}
                </h2>
            </div>
        );
    };

    // loading function for when data fail to fetch (doesn't exist)
    function loading() {
        return <h1>Loading...</h1>
    };

    return coin && coin.rate ? loaded() : loading();
};

export default Price