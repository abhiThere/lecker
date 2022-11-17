import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "American Pancakes",
    description:
      "Light and fluffy pancakes topped with fruit jam and juicy blueberries",
    price: 6.65,
  },
  {
    id: "m2",
    name: "Wiener Schnitzel",
    description: "German speciality served with mashed potatoes and salad",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Japanese Sushi",
    description: "Popular Japanese dish prepared with finest fish and veggies",
    price: 22.75,
  },
  {
    id: "m4",
    name: "Barbecue Burger",
    description:
      "Meaty patty glazed with barbecue sauce and additional seasonings",
    price: 12.99,
  },
  {
    id: "m5",
    name: "Green Salad Bowl",
    description:
      "Healthy salad made with fresh green veggies and creamy yogurt dressing",
    price: 18.89,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
