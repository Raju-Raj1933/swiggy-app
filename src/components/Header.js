import { CART_ICON, LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = ({ darkMode, setDarkMode }) => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const [menu, setMenu] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const toggleBtn = () => {
    setMenu(!menu);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex flex-col custom:flex-row justify-between bg-white shadow-white"
    >
      <div className="flex justify-between w-full custom:w-auto">
        <div className="logo-container w-16 m-4">
          <img src={LOGO_URL} alt="logo" />
        </div>

        <div
          className="m-4 block custom:hidden flex items-center"
          onClick={toggleBtn}
        >
          <h1>MENU</h1>
        </div>
        <div className="pr-2 m-4 custom:hidden">
          <button onClick={() => setDarkMode(!darkMode)}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/toggle-on--v1.png"
              alt="toggle-on--v1"
            />
          </button>
        </div>
      </div>
      <div className="nav-items flex flex-col items-center custom:flex-row custom:items-center custom:justify-center w-full custom:border-t-0">
        <ul
          className={`flex flex-col custom:flex-row items-center w-full bg-[#222222] shadow-transparent custom:border-t-0 custom:bg-transparent shadow-2xl text-[#949494] ${
            menu ? "" : "hidden"
          } custom:flex`}
        >
          <li className="px-3 text-lg  py-2 w-full text-center border-t border-[#565656] custom:border-t-0">
             {onlineStatus ? "Online: 💹" : "Offline: 🔴"}
          </li>
          <li className="px-3 text-lg  py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="px-3 text-lg py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="px-3 text-lg py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li className="px-3 text-lg py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="px-3 text-lg py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <NavLink to="/cart">
              {CART_ICON}-{cartItems.length} items
            </NavLink>
          </li>
          <li className="px-3 text-lg py-2 border-t border-[#565656] w-full text-center custom:border-t-0">
            <button
              className="login px-4"
              onClick={() => {
                setBtnNameReact(btnNameReact === "login" ? "logout" : "login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden custom:block pr-2 m-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/toggle-on--v1.png"
            alt="toggle-on--v1"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;

