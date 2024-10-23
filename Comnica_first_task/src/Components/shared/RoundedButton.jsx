export const RoundedButton = ({ onClick, children }) => {
	return (
		<button type="button" className="roundedBtn" onClick={() => onClick()}>
			{children}
		</button>
	);
};
