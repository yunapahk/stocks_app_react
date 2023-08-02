import React from "react";
import data from "../data.json"; 

const Dashboard = () => {
  return (
    <div>
      {data.map((stock) => (
        <div key={stock.symbol}>
          <h3>{stock.name}</h3>
          <p>Symbol: {stock.symbol}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;