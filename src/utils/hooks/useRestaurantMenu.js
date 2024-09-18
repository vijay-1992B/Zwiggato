import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://my-backend-server-delta.vercel.app/api/menu?pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6186784&lng=77.05335339999999&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
