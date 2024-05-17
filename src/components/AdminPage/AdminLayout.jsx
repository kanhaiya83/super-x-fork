import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:5000",
  headers: { "admin-access-token": "foobar" },
});
const AdminLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const adminQuery = useQuery(
    "coupons",
    async () => {
      const res = await adminAxios.get("/admin/fetchdata");
      return res.data;
    },
    { enabled: !!isLoggedIn }
  );
  useEffect(() => {
    if (localStorage.getItem("isAdminLoggedIn")) {
      setIsLoggedIn(true);
      navigate("/admin")
    } else {
      alert("Not logged in");
      navigate("/admin/login")
    }
  }, [isLoggedIn]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target["password"].value === "admin@123") {
      setIsLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <>
      <div className="w-full px-[5%] py-8">
        <div className="w-full flex justify-end gap-[5%]">
          <div className="flex items-center gap-8">
            <NavLink
              to="/admin"
              className={` font-medium`}
              style={({ isActive, isPending }) => {
                return {
                  color:  isActive? "black" : "gray",
                };
              }}
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/prompt"
              className={` font-medium`}
              style={({ isActive, isPending }) => {
                return {
                    color:  isActive? "black" : "gray",

                };
              }}
            >
              Prompt
            </NavLink>{" "}
            <NavLink
              to="/admin/coupons"
              className={` font-medium`}
              style={({ isActive, isPending }) => {
                return {
                    color:  isActive? "black" : "gray",

                };
              }}
            >
              Coupons
            </NavLink>
            <NavLink
              to="/admin/stats"
              className={` font-medium`}
              style={({ isActive, isPending }) => {
                return {
                    color:  isActive? "black" : "gray",

                };
              }}
            >
              Stats
            </NavLink>
          </div>
          <button
            className="bg-primary p-3"
            onClick={() => {
              localStorage.removeItem("isAdminLoggedIn");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
        {<Outlet context={{ adminQuery, handleSubmit, adminAxios }} />}
      </div>
    </>
  );
};
export default AdminLayout;
