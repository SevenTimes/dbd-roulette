const SurvivorChar = (props) => {
	const { char } = props;
	return (
		<div className="survivor-char">
			<span>{char}</span>
			<div>
				<img src={`./Assets/Survivors/Portraits/${char}.png`} alt={char} />
			</div>
		</div>
	);
};

export default SurvivorChar;
