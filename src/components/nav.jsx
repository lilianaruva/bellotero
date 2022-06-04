import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import logo from "../bellotero.svg";

const Nav = () => {
  const [menu, setMenu] = useState();

  const getMenu = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json"
      )
      .then((response) => {
        const menuData = response.data.menu.items;
        setMenu(menuData);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="navItem">
          {menu?.map((item) => (
            <Link to={item?.route}>{item?.text}</Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;

/*
 <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Solutions</Link>
          </li>
          <li>
            <Link to="/">Stories</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Partners</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
*/
