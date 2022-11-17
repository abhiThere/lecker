import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import logoImage from "../../assets/logo.png";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logoImage} alt="lecker app logo" />
          <h1>Lecker</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
