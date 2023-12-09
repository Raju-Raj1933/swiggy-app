import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      areaName,
      name,
      avgRating,
      costForTwo,
      cuisines,
      sla: {slaString},
    } = resData?.info;
      return (
        <div className="res-card m-4 p-4 w-[250px]  rounded-lg bg-slate-300 mix-blend-hard-light hover:bg-gray-400">
          <img
            src={CDN_URL + cloudinaryImageId}
            className="rounded-lg "
            alt="food-logo"
          />
          <h3 className="font-bold text-lg">{name}</h3>
          <h4 className="text-ellipsis whitespace-nowrap overflow-hidden">{cuisines.join(",")}</h4>
          <h4 className="dark: text-slate-700">{costForTwo }</h4>
          <h4>{avgRating}stars</h4>
          <h4>{areaName}</h4>
          <h4>{slaString} minutes</h4>
        </div>
      );
    };

    export const withPromotedLabel = (RestaurantCard) => {
      return (props) => {
        return (
          <div>
            <label className="bg-//#region text-white rounded-lg p-2 m-2 ">promoted</label>
            <RestaurantCard {...props} />
          </div>
        );
      };
    };
 export default RestaurantCard;    