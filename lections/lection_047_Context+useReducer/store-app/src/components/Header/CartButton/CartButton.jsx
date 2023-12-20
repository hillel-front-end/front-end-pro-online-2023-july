import Button from "../../../UI/Button";
import CartIcon from "../../../UI/CartIcon";
import styles from "./CartButton.module.css";
console.log(styles["cart-button"]);

export default function CartButton({ quantity = 0, onClick = () => true }) {
  console.log(quantity, "quantity");
  return (
    <Button
      className={styles["cart-button"]}
      data-quantity={quantity}
      onClick={onClick}
    >
      <CartIcon />
    </Button>
  );
}
