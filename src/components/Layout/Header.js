import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>DeliciousMeals</h1>
        <HeaderCartButton setShowModal={props.setShowModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  )
}

export default Header