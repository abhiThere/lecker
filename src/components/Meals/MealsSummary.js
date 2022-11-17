import MealsIcon from "./MealsIcon";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        <MealsIcon />
        Delicious Food, Delivered To You
        <MealsIcon />
      </h2>

      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a scrumptious lunch or dinner at home.
      </p>
      <p>
        Our exotic meals are cooked with high-quality ingredients, just-in-time
        and indeed by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
