import styles from './skeleton.module.css';

export default function Skeleton({ count, width = '400', height = '300' }) {
	return Array(count)
		.fill('')
		.map((e, index) => (
			<div
				key={index}
				className={styles.skeleton}
				style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
			></div>
		));
}
