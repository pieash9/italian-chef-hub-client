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
    <div className="mt-36 my-container">
      <div className="mb-10">
        <h3 className="text-4xl text-center font-bold text-gray-600 mb-4">Our Chef</h3>
        <p className="md:w-2/3 mx-auto px-2 text-lg text-center text-gray-600">Meet our renowned chef and learn about their culinary expertise, from classic Italian dishes to modern fusion creations. Discover their story and passion for cooking.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {chefsData.map((singleData) => (
          <ChefCard key={singleData.id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
