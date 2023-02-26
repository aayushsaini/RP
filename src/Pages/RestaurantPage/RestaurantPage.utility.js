/**
 * Returns the recommended list of menu for the selected restaurant
 * @param {Object} restaurantData Data to make menu from
 * @param {int} menuId Needs the index to render category specify menu items
 * @param {Ref} selectedCategory Reference to the div inorder to change attributes to make css class effective
 * @param {Ref} selectedCategoryList Reference to the div containing list of category
 * @returns {Object} Complete Menu for the selected restaurant
 */
export const makeMenuList = (
  restaurantData,
  menuId,
  selectedCategory,
  selectedCategoryList
) => {
  // Remove the active class if any
  Object.entries(selectedCategoryList?.current?.children).map((node) =>
    node[1].classList.remove("active")
  );

  // Add the active class to our selected category
  selectedCategory.current[menuId].classList.add("active");

  const category = selectedCategory.current[menuId].innerText;
  if (category === "Recommended")
    return getRecommended(restaurantData, selectedCategoryList);
  else {
    const newMenu = Object.entries(restaurantData?.menu?.items).filter(
      (item) => item[1].category === category
    );
    // setMenuItems(newMenu);
    return newMenu;
  }
};

/**
 * Returns the recommended list of menu for the selected restaurant
 * @param {Object} restaurantData Data to extract recommended menu from
 * @param {Ref} selectedCategoryList Pass the reference to the div inorder to change attributes to make css class effective
 * @returns {Object} Recommended menu items from restaurant's menu
 */
export const getRecommended = (restaurantData, selectedCategoryList) => {
  //highlights the recommended tab
  Object.entries(selectedCategoryList?.current?.children)[0][1].classList.add(
    "active"
  );

  const recommendedItemIds = restaurantData?.menu?.widgets[0].entities?.map(
    (item) => item.id
  );
  const recommendedList = Object.entries(restaurantData?.menu?.items).filter(
    (item) => recommendedItemIds?.includes(item[1].id)
  );
  // setMenuItems(recommendedList);
  return recommendedList;
};
