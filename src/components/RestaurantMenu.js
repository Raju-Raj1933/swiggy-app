import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
      
  const resInfo = useRestaurantMenu(resId);
  //  useRestaurantMenu is customize hook

  const [showIndex, setShowIndex] = useState(null);
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, city } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
   
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* { city}
      {avgRating} */}

      {categories.map((category, index) => (
        // control componenet
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu


{/* <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              <br />
            </li>
          ))}
      </ul> */}