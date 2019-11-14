import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Burger from "./Components/Burger/Burger";
import BuildControls from "./Components/BuildControls/BuildControls";

import "./index.css";

const App = () => {
	let [ingredients, updateIngredients] = useState({
		salad: 1,
		cheese: 0,
		meat: 1,
		bacon: 0
	});

	const addIngredient = label => {};

	const removeIngredient = label => {};

	return (
		<div>
			<Burger ingredients={ingredients} />
			<BuildControls />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
