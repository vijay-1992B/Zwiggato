import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";
import ShimmerofResCard from "./ShimmerofResCard";

const ResMenu = () => {
  const [resInfo, setResinfo] = useState([]);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    
        const raw = await fetch(RESTAURANT_MENU_API + resId);

        const data = await raw.json();

    setResinfo(data);
    
    
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo.length === 0) return <ShimmerofResCard />;
  
  if (resInfo.statusCode === 1 || !resInfo?.data?.cards) return <Error />;

  const {
    avgRatingString,
    name,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = resInfo?.data?.cards[2]?.card?.card?.info;



  return (
    <div className=" flex justify-center mt-16 ">
      <div className=" w-[800px] ">
        <div className="">
          <h1 className="text-2xl font-bold bg-white items-start">{name}</h1>
        </div>
        <div className="mt-5 border border-white p-4 rounded-2xl shadow-2xl shadow-[#E7E7EE] ">
          <div className="my-2 font-semibold ">
            <span>
              <i className="ri-star-fill text-[#14883f] text-[15px]  align-top"></i>{" "}
              {avgRatingString}
            </span>
            <span className=" ml-2 mr-3">{"(" + totalRatingsString + ") "}  </span>
            <span> {costForTwoMessage}</span>
          </div>
          <h3 className=" text-sm my-2 text-[#FF5200] font-semibold underline">
            {cuisines.join(", ")}
          </h3>
          <h3 className="my-2 font-medium">
            <i class="ri-store-2-line"></i> {"Outlet - "}
            {areaName}
          </h3>
          <div className="my-2 pb-3 border-b font-medium">
            {sla?.slaString ? <i class="ri-time-line mr-1"></i> : null}
            {sla?.slaString ? sla?.slaString.toLowerCase() : null}
          </div>

          <h3 className="text-[#282c3f] opacity-70">
            {feeDetails?.message ? <i class="ri-riding-line mr-2 "></i> : null}
            {feeDetails?.message
              ? feeDetails?.message.replace("<b>", "").replace("</b>", " ")
              : null}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
