import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().getUTCFullYear());
  }, []);


  return (
    <div className="bg-[#232f3e] text-[#949494] mt-4 h-[275px] flex flex-col justify-center">
      <ul className="flex justify-center gap-5 px-10 py-10 flex-wrap items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>  
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>
      <p className="text-center pb-4">&copy; Ecommerce-Website {currentDate}</p>
    </div>
  );
};

export default Footer;
