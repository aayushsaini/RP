import { useState, useEffect } from "react";
import RestaurantsCard from "../../components/RestaurantsCard/RestaurantsCard";
import styles from "./home.module.css";
import Skeleton from "../../components/Common/Skeleton";
import { Link } from "react-router-dom";
import { useHomeMenu } from "../../Hooks/useHomeMenu";
import { onFilterRestaurants } from "./Home.utility";

const Home = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const allRestaurants = useHomeMenu();

  useEffect(() => setFilteredRestaurants(allRestaurants), [allRestaurants]);
  return (
    <>
      <div className={styles.mainBanner}>
        <center>
          <h1 className={styles.bannerTitle}>
            Tasty food, <span>Delivered.</span>
          </h1>
        </center>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const data = onFilterRestaurants(allRestaurants, searchText);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {filteredRestaurants?.length !== 0 ? (
        <div className={styles.restaurantsList}>
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                className="cardNavLink"
                style={{ textDecoration: "none" }}
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantsCard
                  {...restaurant.data}
                  key={restaurant.data.id}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={styles.restaurantsList}>
          <Skeleton count={8} />
        </div>
      )}
    </>
  );
};

export default Home;
