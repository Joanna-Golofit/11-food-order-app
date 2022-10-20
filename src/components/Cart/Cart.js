import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'


const Cart = (props) => {

  const cartItems =
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Rosół', amount: 2, price: 12.13 }, { name: "Rolo" }]
        .map(item => <li key={item.name}>{item.name}</li >)}
    </ul>

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.35</span>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.setShowModal(false)} className={classes['button--alt']}>Close</button>
        <button onClick={() => props.setShowModal(false)} className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart