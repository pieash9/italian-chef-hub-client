/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {googleLogin,githubLogin,loginWithEmail} =useContext(AuthContext)
  const [error,setError] = useState('')

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleSignIn =(e)=>{
    e.preventDefault();
    setError('')
    const form = e.target
    const email=form.email.value
    const password=form.password.value

    loginWithEmail(email,password)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      setError("Your password or email did not match")
      console.log(err)})
    
  }

  const handleGoogleLogin =()=>{
    googleLogin(googleProvider)
    .then(result=>{
      console.log(result.user)
    })
    .catch(err=>console.log(err))
  }

  const handleGithubLogin =()=>{
    githubLogin(githubProvider)
    .then(result=>{
      console.log(result.user)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="my-16">
      <div className=" md:w-4/12 mx-auto">
        <h3 className="text-3xl text-gray-600 font-semibold font-josefin-sans text-center">
          Login To Your Account
        </h3>

        <form onSubmit={handleSignIn}>
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
          
          <p className="mb-3 text-gray-600">New to the Italian Chef Hub? <Link to='/register' className="link-hover text-red-400">Register</Link></p>
        </form>
        {error && <p className="text-warning mb-2">{error}</p>}
          <h5 className="text-2xl font-medium text-gray-600 text-center mb-3">Or</h5>
        <div className="flex items-center justify-between">
          <button onClick={handleGithubLogin}>
            <img
              className="h-10"
              src="https://i.ibb.co/r2N8zZm/image.png"
              alt="github-login"
            />
          </button>
          <button onClick={handleGoogleLogin}>
            <img
              className="h-12"
              src="https://i.ibb.co/JKVFVCn/image.png"
              alt="google-login"
            />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
