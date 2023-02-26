import React from 'react';
import { BiFoodTag } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { ImageCDN } from '../../global.constants';
import Skeleton from '../Common/Skeleton';
import styles from './restaurantItemList.module.css';

const RestaurantItemList = ({ data }) => {
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<p>
					{data.isVeg ? (
						<BiFoodTag color="green" />
					) : (
						<BiFoodTag color="brown" />
					)}{' '}
					<br />
					<div className={styles.name}>{data.name}</div>
				</p>
				<div className={styles.price}>
					<b>₹{data.price / 100}</b>
					<br />
					<p className={styles.description}>{data.description}</p>
				</div>
			</div>
			<div className={styles.right}>
				<img
					className={styles.image}
					src={
						data.cloudinaryImageId
							? ImageCDN + data.cloudinaryImageId
							: ''
					}
				/>
				<div className={styles.addItem}>
					<IoMdAdd
						className={
							data.price === 0
								? `${styles.addButton}-disabled`
								: styles.addButton
						}
						style={{
							color: data.price === 0 ? 'gray' : '#00693a',
							backgroundColor:
								data.price === 0 ? '#efefef' : '#b6f2d7',
							padding: '8px 15px 8px 15px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default RestaurantItemList;
