import React, { useState } from "react";
const PredictionForm = ({ data, setData }) => {
	const [ weekInput, setWeekInput ] = useState("");
	const [ centerIdInput, setCenterIdInput ] = useState("");
	const [ mealIdInput, setMealIdInput ] = useState("");
	const [ homepageInput, setHomepageInput ] = useState("");
	const [ emailerInput, setEmailerInput ] = useState("");
	const [ basePriceInput, setBasePriceInput ] = useState("");
	const [ checkoutPriceInput, setCheckoutPriceInput ] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newData = {
			week: weekInput,
			center_id: centerIdInput,
			meal_id: mealIdInput,
			base_price: basePriceInput,
			checkout_price: checkoutPriceInput,
			homepage_featured: homepageInput,
			emailer_for_promotion: emailerInput
		};
		setData([ ...data, newData ]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='week'>Week</label>
			<input
				onChange={(e) => setWeekInput(e.target.value)}
				type='text'
				id='week'
			/>
			<label htmlFor='center_id'>Center ID</label>
			<input
				onChange={(e) => setCenterIdInput(e.target.value)}
				type='text'
				id='center_id'
			/>
			<label htmlFor='meal_id'>Meal ID</label>
			<input
				onChange={(e) => setMealIdInput(e.target.value)}
				type='text'
				id='meal_id'
			/>
			<label htmlFor='base_price'>Base Price</label>
			<input
				onChange={(e) => setBasePriceInput(e.target.value)}
				type='text'
				id='base_price'
			/>
			<label htmlFor='checkout_price'>Checkout Price</label>
			<input
				onChange={(e) => setCheckoutPriceInput(e.target.value)}
				type='text'
				id='checkout_price'
			/>
			<label htmlFor='homepage_featured'>Homepage Featured</label>
			<input
				onChange={(e) => setHomepageInput(e.target.value)}
				type='text'
				id='homepage_featured'
			/>
			<label htmlFor='emailer_for_promotion'>Emailer For Promotion</label>
			<input
				onChange={(e) => setEmailerInput(e.target.value)}
				type='text'
				id='emailer_for_promotion'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default PredictionForm;
