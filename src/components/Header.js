import { CART_ICON } from "../../utils/constants";
import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

      return (
        <div className="header flex justify-between lg:bg-pink-100 sm: bg-yellow-200 bg-yellow-700 ">
          <div className="logo-container w-16 m-4">
            <img src={LOGO_URL} alt="logo" />
          </div>
          <div className="nav-items flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">
                {" "}
                OnlineS status: {onlineStatus ? "💹" : "🔴"}{" "}
              </li>
              <li className="px-4">
                <Link to="/"> Home </Link>
              </li>
              <li className="px-4">
                <Link to="/about">About Us </Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <Link to="/cart" className="px-4 font-bold ">
                {CART_ICON}
                 -{cartItems.length} items </Link>
              <button
                className="login px-4"
                onClick={() => {
                  btnNameReact === "login"
                    ? setBtnNameReact("logout")
                    : setBtnNameReact("login");
                }}
              >
                {" "}
                {btnNameReact}
              </button>
              <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
          </div>
        </div>
      );
    };

    export default Header;