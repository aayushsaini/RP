import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU } from "../global.constants";

const useRestaurantMenu = (restaurantId) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const result = await fetch(`${SWIGGY_RESTAURANT_MENU}+${restaurantId}`);
    const data = await result.json();
    setDetails(data.data);
  }

  return details;
};

export default useRestaurantMenu;
