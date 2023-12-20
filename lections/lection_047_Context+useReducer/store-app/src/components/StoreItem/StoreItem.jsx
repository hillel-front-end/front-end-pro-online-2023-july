import StoreItemInfo from "../StoreItemInfo";
import Picture from "../../UI/Picture";
import Button from "../../UI/Button";
import ButtonsGroupe from "../../UI/ButtonsGroupe";
import styles from "./StoreItem.module.css";
export default function StoreItem({ storeItem = {}, addToCart }) {
  return (
    <div className={styles.storeItem}>
      <div className={styles.imageWrapper}>
        <Picture src={storeItem.picture} alt={storeItem.description} />
      </div>
      <div className={styles.contentWrapper}>
        <StoreItemInfo
          title={storeItem.title}
          price={storeItem.price}
          description={storeItem.description}
        />
        <ButtonsGroupe>
          <Button className="green-solid" onClick={addToCart}>
            Add
          </Button>
          <Button className="black-simple">Detail</Button>
        </ButtonsGroupe>
      </div>
    </div>
  );
}
