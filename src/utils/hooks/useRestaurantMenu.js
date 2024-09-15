import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);  


  const fetchData = async () => {
    const data = await fetch("/api/proxy?url="+RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

 


  return resInfo;
};

export default useRestaurantMenu;
