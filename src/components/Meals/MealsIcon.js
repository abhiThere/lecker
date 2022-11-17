import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

import classes from "./MealsIcon.module.css";

const MealsIcon = () => {
  return (
    <span className={classes["meals-icon"]}>
      <FontAwesomeIcon icon={faBowlFood} />
    </span>
  );
};

export default MealsIcon;
