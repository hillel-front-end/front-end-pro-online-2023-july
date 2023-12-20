import styles from "./StoreItemInfo.module.css";

export default function StoreItemInfo({
  title = "",
  description = "",
  price = 0,
}) {
  return (
    <>
      <section className={styles.storeItemInfoTitle}>{title}</section>
      <section className={styles.storeItemInfoPrice}>${price}</section>
      <section className={styles.storeItemInfoDescription}>
        {description}
      </section>
    </>
  );
}
