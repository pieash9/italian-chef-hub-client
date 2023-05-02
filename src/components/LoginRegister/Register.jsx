/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target 
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const imgUrl = form.imgUrl.value
    console.log(name,email,password,imgUrl)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(err=>console.log(err))
  };
  return (
    <div className="my-16">
      <div className=" md:w-4/12 mx-auto">
        <h3 className="text-3xl text-gray-600 font-semibold font-josefin-sans text-center">
          Register New Account
        </h3>

        <form onSubmit={handleRegister}>
          <input
            className="input-form mb-5 mt-10"
            name="name"
            type="name"
            placeholder="Enter Name"
            required
          />
          <br />
          <input
            className="input-form mb-5"
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
          <br />
          <input
            className="input-form mb-5"
            name="imgUrl"
            type="text"
            placeholder="Photo URL"
            required
          />
          <div className="flex items-center ">
            <input
              className="form-checkbox h-5 w-5 bg-red-500"
              type="checkbox"
            />
            <p className="cursor-pointer text-gray-600 ml-2">
              I accept the <span className="text-red-500">Terms of use</span> &{" "}
              <span className="text-red-500">Privacy Policy.</span>{" "}
            </p>
          </div>

          <button className="button-primary text-white w-full !py-3 my-5">
            Register
          </button>
          <p className="mb-3 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="link-hover ">
              Login
            </Link>
          </p>
        </form>
        <h5 className="text-2xl font-medium text-gray-500 text-center mb-3">
          Or
        </h5>
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

export default Register;
