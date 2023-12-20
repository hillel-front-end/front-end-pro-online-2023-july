import Container from "../../UI/Container";
import CartButton from "./CartButton";
import styles from "./Header.module.css";
import { useShoppingCart } from "../../store/ShoppingCartProvider";

export default function Header() {
  const { cartQuantity } = useShoppingCart();

  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <h1 className={styles.logo}>Apple Store</h1>
        <CartButton quantity={cartQuantity} />
      </Container>
    </header>
  );
}
