import styles from "./skeleton.module.css";

export default function Skeleton({count}) {
  return Array(count)
    .fill("")
    .map((e, index) => 
      <div key={index} className={styles.skeleton}></div>
    );
}
