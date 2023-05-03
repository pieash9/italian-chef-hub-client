/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const ChefCard = ({ singleData }) => {
  const {id, name, likes, recipesNo, experience, picture } = singleData;
  return (
    <div className="card card-compact  bg-base-100 shadow-2xl mt-10">
      <figure>
        <img className="rounded-t-lg" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title !text-2xl text-gray-600">{name}</h2>
        <p className="text-base text-gray-500 font-medium">
          <span className="text-gray-700">Experience:</span> {experience} Years
        </p>
        <div className="flex items-center justify-between">
          <p className="text-base text-gray-500 font-medium">
          <span className="text-gray-700">No of Recipes:</span> {recipesNo}
          </p>
          <div className="flex items-center">
          <FcLike className="text-xl mr-2"/> <span className="text-base text-gray-600 font-medium"> {likes}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`../chefDetails/${id}`}><button className="button-primary text-white !py-2 my-5">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
