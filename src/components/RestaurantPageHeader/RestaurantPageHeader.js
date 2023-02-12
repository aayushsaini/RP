import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Skeleton from '../../components/Common/Skeleton';
import { ImageCDN } from '../../global.constants';

import styles from './restaurantPageHeader.module.css';

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

const RestaurantPageHeader = (props) => {
	const details = props.data;
	return (
		<div className={styles.banner}>
			{Object.keys(details).length === 0 ? (
				<>
					<br />
					<br />
					<Skeleton
						count={1}
						height={180}
						width={300}
					/>
				</>
			) : (
				<img
					src={ImageCDN + details?.cloudinaryImageId}
					className={styles.restaurantImage}
					alt="restaurant image"
				/>
			)}

			<div className={styles.restaurantDetails}>
				<h1 className={styles.restaurantName}>{details.name}</h1>
				<p className={styles.restaurantFoodType}>
					{Object.keys(details).length !== 0
						? details.cuisines?.join(', ')
						: 'loading...'}
				</p>
				<p className={styles.restaurantLocality}>
					{Object.keys(details).length !== 0
						? details.locality + ', ' + details.area
						: 'loading...'}
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
									: 'loading...'}
							</span>
							<br />
						</div>
						<span className={styles.restaurantExtraBottom}>
							{Object.keys(details).length !== 0
								? details.totalRatingsString
								: 'loading...'}
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
	);
};

export default RestaurantPageHeader;
