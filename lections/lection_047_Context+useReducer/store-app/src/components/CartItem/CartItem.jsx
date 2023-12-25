import Picture from "../../UI/Picture";
import StoreItemInfo from "../StoreItemInfo";
import Button from "../../UI/Button";
import styles from "./CartItem.module.css";
import Counter from "../../UI/Counter";

export default function CartItem({
  picture,
  title,
  description,
  price,
  quantity,
  incrementCartItemQuantity,
}) {
  return (
    <div className={styles.cartItem}>
      <img
        width="15px"
        height="15px"
        src="https://www.iconpacks.net/icons/3/free-icon-red-delete-10437.png"
        className={styles.deleteButton}
      />
      <div className={styles.pictureWrapper}>
        <Picture src={picture} />
      </div>
      <div>
        <StoreItemInfo title={title} description={description} price={price} />
      </div>
      <Counter>
        <Button onClick={incrementCartItemQuantity}>+</Button>
        <span className="count">{quantity}</span>
        <Button>-</Button>
      </Counter>
    </div>
  );
}
