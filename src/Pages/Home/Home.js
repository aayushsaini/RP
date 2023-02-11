import { useState, useEffect } from 'react';
import RestaurantsCard from '../../components/RestaurantsCard/RestaurantsCard';
import { apiLink } from '../../global.constants';
import styles from './home.module.css';
import Skeleton from '../../components/Common/Skeleton';
import { Link } from 'react-router-dom';

const Home = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const data = await fetch(apiLink);
		const res = await data.json();
		setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(res?.data?.cards[2]?.data?.data?.cards);
	}

	const onFilterRestaurants = (allRestaurants, searchText) => {
		return allRestaurants.filter((restaurant) =>
			restaurant.data.name
				.toLowerCase()
				.includes(searchText.toLowerCase())
		);
	};

	return (
		<>
			<div className={styles.mainBanner}>
				<center>
					<h1 className={styles.bannerTitle}>
						Tasty food. <span>Delivered.</span>
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
							const data = onFilterRestaurants(
								allRestaurants,
								searchText
							);
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
								style={{ textDecoration: 'none' }}
								to={'/restaurant/' + restaurant.data.id}
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
