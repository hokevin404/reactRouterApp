import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price() {

    // API Key
    const apiKey = "DBB7F384-EA45-4F83-A4B91C4BDD3F5559";

    // Grab currency symbol from URL param
    const params = useParams();
    const symbol = params.symbol;

    // Using 'params' and symbol' variable to create URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
    // State to hold coin data
    const [coin, setCoin] = useState('null');

    return (
        <h1>
            This is the Price Component.
        </h1>
    )
}

export default Price