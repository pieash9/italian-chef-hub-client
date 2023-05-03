/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ChefDetailsCard = ({ singleRecipe }) => {
  const { name, ingredients, method, rating } = singleRecipe;

  return (
    <div className="border border-gray-300 p-3 rounded-md">
      <h5 className="text-xl text-gray-500 font-medium mt-4">
        <span className="text-gray-700">Recipe name: </span>
        {name}
      </h5>
      <p className="text-lg text-gray-700 font-medium mt-3">Ingredients are:</p>
      <div className="ml-4 text-gray-600">
        {ingredients?.map((ingredient, id) => (
          <li key={id}>{ingredient}</li>
        ))}
      </div>
      <h5 className="text-base text-gray-600 mt-4">
        <span className="text-gray-700 font-medium ">Cooking Method: </span>
        {method.slice(0,200)}... <span className="text-red-500 cursor-pointer">Read More</span>
      </h5>
      <div>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
