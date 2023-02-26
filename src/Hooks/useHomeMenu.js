import { useEffect, useState } from "react";
import { SWIGGY_HOME_MENU } from "../global.constants";

export const useHomeMenu = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(SWIGGY_HOME_MENU);
    const res = await data.json();
    setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
};
