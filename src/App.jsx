import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Customize
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                />
              }
            />

            <Route
              path="/checkout"
              element={<Checkout ingredients={ingredients} />}
            />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;
