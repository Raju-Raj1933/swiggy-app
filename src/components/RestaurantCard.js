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
    } = resData
      return (
        <div className="res-card xss:m-4 my-4 mx-1 xs:p-4 p-[10px]  lg:w-[250px] md:w-[215px] xs:w-[232px] xss:w-[183px] xss:px-6 px-[5px] w-[140px] rounded-lg bg-slate-300 mix-blend-hard-light hover:bg-gray-400 ">
          <img
            src={CDN_URL + cloudinaryImageId}
            className="rounded-lg  object-cover lg:w-full max-w-full"
            alt="food-logo"
          />
          <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">{name}</h3>
          <h4 className="text-ellipsis whitespace-nowrap overflow-hidden">
            {cuisines.join(",")}
          </h4>
          <h4 className="dark: text-slate-700">{costForTwo}</h4>
          <h4>{avgRating}stars</h4>
          <h4>{areaName}</h4>
          <h4>{slaString} </h4>
          {/* <h4>User</h4> */}
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