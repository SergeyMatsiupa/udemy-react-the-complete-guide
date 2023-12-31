import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setHttpError("");
    const fetchMealsFB = async () => {
      const response = await fetch(
        "https://react-http-3d40f-default-rtdb.firebaseio.com/meals.json"
      );
      console.log('response', response);
      console.log('response.status', response.status);
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      console.log("responseData", responseData);
      const mealsArr = [];
      for (const key in responseData) {
        mealsArr.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log("mealsArr", mealsArr);
      setMeals(mealsArr);
      setIsLoading(false);
    };

    fetchMealsFB().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  // console.log('JSON.stringify(DUMMY_MEALS)', JSON.stringify(DUMMY_MEALS));

  if (isLoading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes["meals-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  // const mealsList = DUMMY_MEALS.map((meal) => (
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
