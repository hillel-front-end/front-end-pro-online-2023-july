import { createContext, useState, useReducer, useContext } from "react";

const CartContext = createContext();

export const useShoppingCart = () => useContext(CartContext);

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  totalPrice: 0,
};

function shoppingCartReducer(state, action) {
  // console.log(state, "state");
  // console.log(action, "action");

  let cartItems;

  switch (action.type) {
    case "ADD_TO_CART": {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (cartItem) {
        const cpCartItem = { ...cartItem, quantity: cartItem.quantity + 1 };

        cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === cpCartItem.id) return cpCartItem;
          return cartItem;
        });
      } else {
        cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems,
        cartQuantity: state.cartQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case "REMOVE_FROM_CART": {
      // removing .....
    }
  }
}

export default function ShoppingCartProvider({ children }) {
  const [modalVisibility, setModalVisibilty] = useState(false);

  // const [cartItems, setCartItems] = useState(false);
  // const [cartQuantity, setCartQuantity] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(false);

  // const context = {
  //   modalVisibility,
  //   cartItems,
  //   cartQuantity,
  //   totalPrice,
  //   setModalVisibilty,
  //   setCartItems,
  //   setCartQuantity,
  //   setTotalPrice,
  // };

  // setModalVisibilty((prev) => {
  //   return {
  //     ...prev,
  //     [a]: 12
  //   }
  // })

  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  console.log(state, "state");

  const addToCart = (storeItem) => {
    dispatch({ type: "ADD_TO_CART", payload: storeItem });
  };

  const context = {
    ...state,
    modalVisibility,
    setModalVisibilty,
    addToCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
