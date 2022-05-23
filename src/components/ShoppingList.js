import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Categorie from "./Categories";
import { useState } from "react";
import React from 'react';

function ShoppingList({ cart, updateCart }) {
  const [Category, setCategory] = useState("Tout");

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <ul className="lmj-plant-list">
        <Categorie Category={Category} setCategory={setCategory} />
        {plantList.map(({ id, cover, name, water, light, price, category }) => (
          <div key={id}>
            {category == Category ? (
              <React.Fragment>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                  Category={Category}
                  category={category}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </React.Fragment>
            ): Category == "Tout" &&
            <React.Fragment>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
              Category={Category}
              category={category}
            />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </React.Fragment>
          }
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
