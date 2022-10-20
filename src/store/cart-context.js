import { createContext } from "react";

const CartContext = createContext({
  // to takie na odwal zeby pokazac jakie sa propsy
  items: [],
  totalAmount: 3,
  addItem: (item) => { },
  removeItem: (id) => { },
});

export default CartContext;