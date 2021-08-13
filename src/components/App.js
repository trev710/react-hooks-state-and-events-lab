import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //state and event handler for items
  const [items, setItems] = useState(itemData);
  //....Dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
//Click for dark mode
  function handleDarkModeClick() {
    //function goes between not dark and dark calling on the state setting the darkMode
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
   
  const appClass = isDarkMode ? "App dark" : "App light"
  // use a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature (use Tenary)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;