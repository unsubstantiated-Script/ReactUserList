import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, children, onClick }) => {
	const { button } = styles;

	return (
		<button className={button} type={type || "button"} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
