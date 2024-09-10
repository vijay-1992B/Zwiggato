import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);  


  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId , {
      headers: {
      'x-cors-api-key': 'temp_b98cd3dba8508af91b6313736c7b22cf'
      }
    });
    const json = await data.json();
    setResInfo(json);
  };

 


  return resInfo;
};

export default useRestaurantMenu;
