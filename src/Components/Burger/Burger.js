import React from "react";
import "../../index.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(
    (ingredient, index) => {
      let ingredientAmount = props.ingredients[ingredient];
      let ingredientsToAdd = [];
      for (let i = 0; i < ingredientAmount; i++) {
        ingredientsToAdd.push(
          <BurgerIngredient type={ingredient} key={ingredient + i} />
        );
      }

      return [...ingredientsToAdd];
    }
  );

  transformedIngredients = transformedIngredients.flat();

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please put in ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type={"bread-top"} key={"top"} />
      {transformedIngredients}
      <BurgerIngredient type={"bread-bottom"} key={"bottom"} />
    </div>
  );
};

export default Burger;
