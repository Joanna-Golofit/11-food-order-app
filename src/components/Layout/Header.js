import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>DeliciousMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  )
}

export default Header