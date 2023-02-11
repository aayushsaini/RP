import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { ImageCDN } from '../../global.constants';

import styles from './restaurantPage.module.css';

const VerticalHR = () => {
	return (
		<div
			style={{
				borderLeft: '1px solid grey',
				height: '40px',
				display: 'block',
				marginLeft: '20px',
				marginRight: '22px',
				// marginBottom: '5px',
			}}
		></div>
	);
};

const RestaurantPage = () => {
	const { id } = useParams();

	const [details, setDetails] = useState({});

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const result = await fetch(
			`https://www.swiggy.com/dapi/menu/v4/full?menuId=${id}`
		);
		const data = await result.json();
		setDetails(data.data);
		console.log(data.data);
	}

	return (
		<div>
			<div className={styles.banner}>
				<img
					src={ImageCDN + details?.cloudinaryImageId}
					className={styles.restaurantImage}
					alt="restaurant image"
				/>
				<div className={styles.restaurantDetails}>
					<h1 className={styles.restaurantName}>{details.name}</h1>
					<p className={styles.restaurantFoodType}>
						{Object.keys(details).length !== 0
							? details.cuisines?.join(', ')
							: ' '}
					</p>
					<p className={styles.restaurantLocality}>
						{Object.keys(details).length !== 0
							? details.locality + ', ' + details.area
							: ' '}
					</p>
					<div className={styles.restaurantDetailsExtra}>
						<div className={styles.restaurantExtraContainer}>
							<div className={styles.restaurantExtraTop}>
								<span>
									<AiFillStar
										size="14px"
										style={{
											marginRight: '2px',
											color: 'gold',
										}}
									/>
									{Object.keys(details).length !== 0
										? details.avgRatingString
										: ''}
								</span>
								<br />
							</div>
							<span className={styles.restaurantExtraBottom}>
								{Object.keys(details).length !== 0
									? details.totalRatingsString
									: ''}
							</span>
						</div>
						<VerticalHR />
						<div
							className={styles.restaurantExtraContainer}
							style={{ color: 'white' }}
						>
							<span style={{ fontWeight: 700 }}>-- mins</span>
							<span style={{ color: 'rgb(214, 214, 214)' }}>
								Delivery time
							</span>
						</div>
						<VerticalHR />
						<div className={styles.restaurantExtraContainer}>
							<div className={styles.restaurantExtraTop}>
								<span>
									{Object.keys(details).length !== 0
										? '₹ ' + details.costForTwo / 100
										: ''}
								</span>
							</div>
							<div className={styles.restaurantExtraBottom}>
								Cost for two
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container}>Restaurant {id}</div>
		</div>
	);
};

export default RestaurantPage;
