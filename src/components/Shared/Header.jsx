/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-between items-center pt-5 my-container">
      <h3 className="text-2xl font-medium text-gray-600">Italian Chef Hub</h3>
      <div className="flex justify-center items-center gap-7">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>

        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom cursor-pointer"
              data-tip={user?.displayName || 'Anonymous'}
            >
              <img
                className="rounded-full h-10 w-10 border-2 border-red-300"
                src={user?.photoURL || "https://img.freepik.com/free-icon/avatar_318-158392.jpg"}
                alt=""
              />
            </div>{" "}
            <Link onClick={handleLogout} className="button-secondary">
              <button>Logout</button>
            </Link>{" "}
          </>
        ) : (
          <Link to="/login">
            <button className="button-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
