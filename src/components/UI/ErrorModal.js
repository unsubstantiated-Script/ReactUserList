import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, errorToggle }) => {
	return (
		<div>
			<div className={styles.backdrop} />
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{title}</h2>
				</header>
				<div className={styles.content}>
					<p>{message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={errorToggle}>Okay Guy</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
