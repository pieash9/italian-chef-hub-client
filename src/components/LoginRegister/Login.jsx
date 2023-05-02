/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-16">
      <div className=" md:w-4/12 mx-auto">
        <h3 className="text-3xl text-gray-600 font-semibold font-josefin-sans text-center">
          Login To Your Account
        </h3>

        <form>
          <input
            className="input-form mb-5 mt-10"
            name="email"
            type="email"
            placeholder="Enter Email"
            required
          />
          <br />
          <input
            className="input-form mb-5"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          <p className="cursor-pointer text-gray-600">Forgot password? </p>
          <button className="button-primary text-white w-full !py-3 my-5">
            Login
          </button>
          <p className="mb-3 text-gray-600">New to the Italian Chef Hub? <Link to='/register' className="link-hover ">Register</Link></p>
        </form>
          <h5 className="text-2xl font-medium text-gray-600 text-center mb-3">Or</h5>
        <div className="flex items-center justify-between">
          <button>
            <img
              className="h-10"
              src="https://i.ibb.co/r2N8zZm/image.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="h-12"
              src="https://i.ibb.co/JKVFVCn/image.png"
              alt=""
            />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
