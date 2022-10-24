import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => { };
  const cartItemAddHandler = item => { };
  // console.log(cartCtx)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const cartItems =
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item =>
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          // onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />)}
    </ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart