import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => currNumber + item.amount, 0)
  
  let btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;
  useEffect(() => {
    setBtnIsHighlighted(true)
    setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

  
    // return () => {

    // }
  }, [numberOfCartItems])
  

  console.log("cartCtx", cartCtx)
  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={classes.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton