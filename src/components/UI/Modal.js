import React from 'react';
import Cart from '../Cart/Cart';
import classes from './Modal.module.css'


const Backdrop = () => {
  return (
    <div className={classes.backdrop}></div>
  )
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
};

const Modal = (props) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay>
        <Cart />
      </ModalOverlay>
    </>
  )
};

export default Modal