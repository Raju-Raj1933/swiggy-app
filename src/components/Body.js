import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

 

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (Array.isArray(restaurants)) {
        setListOfRestaurants(restaurants);
        setFilterRestaurants(restaurants);
      } else {
        console.error("Data fetched is not in the expected format.");
        setListOfRestaurants([]);
        setFilterRestaurants([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]);
      setFilterRestaurants([]);
    }
  };


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Oop's look like you're offline!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(userContext);
  
return !listOfRestaurants || listOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <div className="">
    <div className="filter flex justify-between flex-wrap">
      <div className="search mt-3 mr-3 ml-3  pt-3 xss:pr-3 xss:pl-3 pr-1 pl-1">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="xss:px-9 px-3 py-2 rounded-lg bg-green-100 xss:m-3 mt-3 mr-1 ml-1 mb-2"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="search flex items-center sm:m-3 p-3 xs:m-2">
        <button
          className="px-4 py-2 bg-pink-300"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilterRestaurants(filterList);
            // setListOfRestaurants(filterList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      {/* <div className="search flex items-center m-3 p-3">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
    </div>
    <div className="sm:flex sm:flex-wrap md:justify-center sm:justify-evenly xs:gap-3 xs:gap-y-2 grid grid-cols-2 justify-items-center mx-2 xss:mx-0 lg:px-[31px] ">
      {filteredRestaurants.map((restaurant) => (
        <Link
          key={restaurant?.info.id}
          to={"/restaurants/" + restaurant?.info.id}
        >
          {restaurant?.info.promoted ? (
            <RestaurantCardPromoted resData={restaurant?.info} />
          ) : (
            <RestaurantCard resData={restaurant?.info} />
          )}
        </Link>
      ))}
    </div>
  </div>
);
};
export default Body;
