import React, { useState, useEffect, useCallback} from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://react-hooks-update-3249d-default-rtdb.firebaseio.com/ingredients.json"
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({ id: key, ...responseData[key] });
  //       }
  //       setUserIngredients(loadedIngredients);
  //     });
  // }, []);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, [setUserIngredients]);

   const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-hooks-update-3249d-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
    // setUserIngredients((prevIngredients) => [
    //   ...prevIngredients,
    //   { id: Math.random().toString(), ...ingredient },
    // ]);
  };

  const removeIngredientHandler = (id) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== id)
    );
    // console.log("id", id);
    // console.log("userIngredients", userIngredients);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      {/* <IngredientList ingredients={userIngredients} onRemoveItem={()=> {}}/> */}
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
