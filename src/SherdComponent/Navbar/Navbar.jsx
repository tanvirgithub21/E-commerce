import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsXLg, BsList } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  const [navSwitch, setNavSwitch] = useState(false);

  //Active or DeActive route styles
  const active =
    "block py-2 pl-3 pr-4 rounded md:bg-transparent text-blue-500 font-medium md:p-0";
  const deActive =
    "block py-2 pl-3 pr-4 rounded md:bg-transparent text-black font-medium md:p-0";

  return (
    <nav class="bg-[#f7f7f7] border-gray-200 px-2 sm:px-4 rounded ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="" class="flex items-center h-16">
          <img src="logo.png" class="h-full mr-3" alt="Logo" />
        </Link>
        <button
          onClick={() => setNavSwitch(!navSwitch)}
          type="button"
          class="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 "
        >
          {navSwitch ? <BsXLg size="1.8rem" /> : <BsList size="1.8rem" />}
        </button>

        <div class={`w-full md:block md:w-auto ${!navSwitch && "hidden"}`}>
          <ul class="md:flex flex-col p-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-[#f7f7f7]">
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/card"
                className={`${({ isActive }) =>
                  isActive ? active : deActive} relative`}
              >
                <RiShoppingCartLine size="1.5rem" />
                <div className="flex w-5 h-5 rounded-full justify-center items-center bg-rose-500 text-white absolute top-[-30%] right-[-30%]">
                  5
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singUp"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                SING UP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                LOGOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
