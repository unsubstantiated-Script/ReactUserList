import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredUserAge, setEnteredUserAge] = useState("");
	const [error, setError] = useState();

	const userNameChangeHandler = (e) => {
		setEnteredUserName(e.target.value);
	};

	const userAgeChangeHandler = (e) => {
		setEnteredUserAge(e.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age",
			});
			return;
		}

		if (+enteredUserAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter an age greater than zero",
			});
			return;
		}

		onAddUser(enteredUserName, enteredUserAge);
		console.log(enteredUserName, enteredUserAge);
		setEnteredUserName("");
		setEnteredUserAge(0);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					errorToggle={errorHandler}
				/>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						onChange={userNameChangeHandler}
						value={enteredUserName}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						onChange={userAgeChangeHandler}
						value={enteredUserAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
