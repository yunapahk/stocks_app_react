import React, { useEffect, useState } from "react";
import axios from "axios";

const Stock = (props) => {
  const [stock, setStock] = useState(null);
  const symbol = props.match.params.symbol;

  useEffect(() => {
    // Define the FMP API endpoint and your API key
    const apiEndpoint = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=e9e422691559e6963ee0bdae18504192`;

    // Make the API request using Axios
    axios.get(apiEndpoint)
      .then((response) => {
        // Assuming the FMP API returns an array of stock data, we'll use the first item (index 0)
        if (response.data.length > 0) {
          setStock(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching stock data:", error);
      });
  }, [symbol]);

  if (!stock) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{stock.name}</h3>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: {stock.price}</p>
      <p>Change: {stock.change}</p>
      {/* Add other stock attributes as needed */}
    </div>
  );
};

export default Stock;
