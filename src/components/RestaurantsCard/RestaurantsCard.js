import { BiFoodTag } from 'react-icons/all';

import { ImageCDN } from '../../global.constants';
import styles from './restaurantsCard.module.css';

const RestaurantsCard = (props) => {
	console.log('>>', props);
	return (
		<div className={styles.restaurantCard}>
			<img src={ImageCDN + props.cloudinaryImageId} />
			<span className={styles.title}>
				{/* {props.veg ? (
          <BiFoodTag color="rgb(31, 188, 104)" />
        ) : (
          <BiFoodTag color="brown" />
        )} */}
				{props.name}{' '}
			</span>

			<span className={styles.subTitle}>{props.cuisines.join(', ')}</span>
		</div>
	);
};

export default RestaurantsCard;
