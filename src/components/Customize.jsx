import React, { useState } from "react";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DragDrop from "./DragDrop";
import "../App.css";

export default function Customize({ ingredients, setIngredients }) {
  let navigate = useNavigate();

  const onChange = (event, name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0 }}>
        <div
          className="overalltop"
          style={{ maxHeight: 400, maxWidth: 400, position: "relative" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              // y: ingredients["basil"] ? 100 : -100,
              scale: ingredients["basil"] ? 1 : 0,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4 boardTop "
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: ingredients["olive"] ? 1 : 0,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4 boardTop"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: ingredients["pineapple"] ? 1 : 0,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3 boardTop"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: ingredients["tomato"] ? 1 : 0,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4 boardTop"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: ingredients["mushroom"] ? 1 : 0,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4 boardTop"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} className=""></motion.div>
        </div>
      </div>

      {/* base */}
      <div style={{ flex: 2, padding: 40 }}>
        <DragDrop />
      </div>

      <div style={{ flex: 2, padding: 40 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>

        <button
          onClick={() => navigate("/checkout")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
