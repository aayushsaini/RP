import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import RestaurantItemList from "../../components/RestaurantItemList/RestaurantItemList";
import RestaurantPageHeader from "../../components/RestaurantPageHeader/RestaurantPageHeader";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";

import "./restaurantPage.css";
import { getRecommended, makeMenuList } from "./RestaurantPage.utility";

const RestaurantPage = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState(null);

  const restaurantData = useRestaurantMenu(id);

  const selectedCategory = useRef([]);
  const selectedCategoryList = useRef([]);

  useEffect(() => {
    // load recommended list as soon as data is loaded
    if (Object.keys(restaurantData).length > 0) {
      const recommendedMenu = getRecommended(
        restaurantData,
        selectedCategoryList
      );
      setMenuItems(recommendedMenu);
    }
  }, [restaurantData]);

  return (
    <div>
      <RestaurantPageHeader data={restaurantData} />
      <div className="container">
        <ul ref={selectedCategoryList}>
          {restaurantData?.menu?.widgets.map((category, id) => (
            <li
              className="category"
              onClick={() => {
                const menu = makeMenuList(
                  restaurantData,
                  id,
                  selectedCategory,
                  selectedCategoryList
                );
                setMenuItems(menu);
              }}
              ref={(e) => (selectedCategory.current[id] = e)}
              key={id}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <ul>
          {menuItems?(Object.keys(menuItems).length === 0 ?
            <h2>Nothing here for now, check back later 😋</h2> :
            menuItems.map((item) => <RestaurantItemList data={item[1]} />)):""}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
