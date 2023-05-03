/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [chefsData, setChefsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);
  return (
    <div>
        <div>
            <h3 className="text-3xl text-center ">Chef Details</h3>
        </div>
      <div>
      {chefsData.map((singleData) => (
        <ChefCard key={singleData.id} singleData={singleData} />
      ))}
      </div>
    </div>
  );
};

export default Chef;
