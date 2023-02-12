import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantItemList from '../../components/RestaurantItemList/RestaurantItemList';
import RestaurantPageHeader from '../../components/RestaurantPageHeader/RestaurantPageHeader';

import './restaurantPage.css';

const RestaurantPage = () => {
	const { id } = useParams();

	const [details, setDetails] = useState({});
	const [menuItems, setMenuItems] = useState(null);
	const selectedCategory = useRef([]);
	const selectedCategoryList = useRef([]);

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	useEffect(() => {
		if (Object.keys(details).length > 0) getRecommended();
	}, [details]);

	async function getRestaurantInfo() {
		const result = await fetch(
			`https://www.swiggy.com/dapi/menu/v4/full?menuId=${id}`
		);
		const data = await result.json();
		setDetails(data.data);
	}

	const getRecommended = () => {
		//highlight the recommended tab
		Object.entries(
			selectedCategoryList?.current?.children
		)[0][1].classList.add('active');

		const recommendedItemIds = details.menu.widgets[0].entities.map(
			(item) => item.id
		);
		const recommendedList = Object.entries(details.menu.items).filter(
			(item) => recommendedItemIds.includes(item[1].id)
		);
		setMenuItems(recommendedList);
	};

	const makeMenuList = (e, index) => {
		// Remove the active class if any
		Object.entries(selectedCategoryList?.current?.children).map((node) =>
			node[1].classList.remove('active')
		);

		// Add the active class to our selected category
		selectedCategory.current[index].classList.add('active');

		const category = selectedCategory.current[index].innerText;
		if (category === 'Recommended') getRecommended();
		else {
			const newMenu = Object.entries(details.menu.items).filter(
				(item) => item[1].category === category
			);
			setMenuItems(newMenu);
		}
	};

	return (
		<div>
			<RestaurantPageHeader data={details} />
			<div className="container">
				<ul ref={selectedCategoryList}>
					{details?.menu?.widgets.map((category, index) => (
						<li
							className="category"
							onClick={(e) => makeMenuList(e, index)}
							ref={(e) => (selectedCategory.current[index] = e)}
						>
							{category.name}
						</li>
					))}
				</ul>
				<ul>
					{menuItems !== null
						? menuItems.map((item) => (
								<RestaurantItemList data={item[1]} />
						  ))
						: 'please select'}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantPage;
