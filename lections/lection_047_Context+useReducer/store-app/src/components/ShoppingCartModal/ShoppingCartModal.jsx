import Modal from "../../UI/Modal";
import Card from "../../UI/Card";
import styles from "./ShoppingCartModal.module.css";
import { useShoppingCart } from "../../store/ShoppingCartProvider";
import CartItem from "../CartItem/CartItem";

export default function ShoppingCartModal({ storeItems }) {
  const { cartItems, modalVisibility, closeModal, addToCart, totalPrice } =
    useShoppingCart();

  const ModalHeader = (
    <header className={styles.header}>
      <h3 className={styles.title}>Shopping Cart</h3>
      <span className={styles.action}>Remove all</span>
    </header>
  );

  const findStoreItem = (id) =>
    storeItems.find((storeItem) => id === storeItem.id);

  const isEmptyShoppingCart = cartItems.length === 0;

  return (
    <Modal visibility={modalVisibility} onClose={closeModal}>
      <Card className={styles.container}>
        {ModalHeader}
        <div>
          {!isEmptyShoppingCart &&
            cartItems.map(
              (
                cartItem // cartItem = {id, price, quintity})
              ) => (
                <CartItem
                  key={cartItem.id}
                  quantity={cartItem.quantity}
                  incrementCartItemQuantity={() => addToCart(cartItem)}
                  {...findStoreItem(cartItem.id)}
                />
              )
            )}
          {isEmptyShoppingCart && <div>Empty Shopping Cart </div>}
        </div>
        <hr />
        {!isEmptyShoppingCart && <div>Total: {totalPrice}</div>}
      </Card>
    </Modal>
  );
}
