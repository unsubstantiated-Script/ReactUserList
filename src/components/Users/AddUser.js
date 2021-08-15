import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ onAddUser }) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age",
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter an age greater than zero",
			});
			return;
		}

		onAddUser(enteredName, enteredAge);
		//Not really a good idea
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
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
					<input id='username' type='text' ref={nameInputRef} />
					<label htmlFor='age'>Age (Years)</label>
					<input id='age' type='number' ref={ageInputRef} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
