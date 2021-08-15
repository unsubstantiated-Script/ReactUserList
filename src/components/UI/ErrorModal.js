import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ errorToggle }) => {
	return <div className={styles.backdrop} onClick={errorToggle} />;
};

const ModalOverlay = ({ errorToggle, title, message }) => {
	return (
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
	);
};

const ErrorModal = ({ title, message, errorToggle }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop errorToggle={errorToggle} />,
				document.getElementById("backdrop-root"),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					errorToggle={errorToggle}
					title={title}
					message={message}
				/>,
				document.getElementById("overlay-root"),
			)}
		</>
	);
};

export default ErrorModal;
