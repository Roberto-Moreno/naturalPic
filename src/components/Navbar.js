import React from 'react';
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcLike } from "react-icons/fc";


export default function Navbar() {
  return (
    <nav className="navbar2">
      <Link to="/"> <FcHome/> Home </Link> | <Link to="/favoritos"> < FcLike /> Favoritos </Link>
    </nav>
  );
}