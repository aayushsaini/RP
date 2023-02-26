export const onFilterRestaurants = (allRestaurants, searchText) => {
  return allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
