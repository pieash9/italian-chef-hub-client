/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FcLike } from "react-icons/fc";

const ChefCard = ({ singleData }) => {
  const { name, likes, recipesNo, experience, picture } = singleData;
  return (
    <div className="card card-compact  bg-base-100 shadow-2xl mt-10">
      <figure>
        <img className="rounded-t-lg" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title !text-2xl text-gray-600">{name}</h2>
        <p className="text-base text-gray-600 font-medium">
          Experience: {experience} Years
        </p>
        <div className="flex items-center justify-between">
          <p className="text-base text-gray-600 font-medium">
            No of Recipes: {recipesNo}
          </p>
          <div className="flex items-center">
          <FcLike className="text-xl mr-2"/> <span className="text-base text-gray-600 font-medium"> {likes}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="button-primary text-white !py-2 my-5">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
