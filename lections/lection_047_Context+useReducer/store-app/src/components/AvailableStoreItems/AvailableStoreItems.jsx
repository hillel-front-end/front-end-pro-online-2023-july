import Card from "../../UI/Card";
import StoreItem from "../StoreItem";
import style from "./AvailableStoreItems.module.css";
import { useShoppingCart } from "../../store/ShoppingCartProvider";

export default function AvailableStoreItems({ storeItems = [] }) {
  const { addToCart } = useShoppingCart();
  const isStoreEmpty = storeItems.length === 0;

  return (
    <div className={style.availableStoreItems}>
      {!isStoreEmpty &&
        storeItems.map((storeItem) => (
          <Card className={style.availableStoreItem} key={storeItem.id}>
            <StoreItem
              storeItem={storeItem}
              addToCart={() =>
                addToCart({ id: storeItem.id, price: storeItem.price })
              }
            />
          </Card>
        ))}
      {isStoreEmpty && <div> Empty Store </div>}
    </div>
  );
}
