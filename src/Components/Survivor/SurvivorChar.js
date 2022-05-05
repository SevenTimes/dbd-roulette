const SurvivorChar = (props) => {
	const { char } = props;
	return (
		<div>
			<h1>{char.name}</h1>
			<img
				src={`./Assets/Survivors/Portraits/${char.name}.png`}
				alt={char.name}
			/>
		</div>
	);
};

export default SurvivorChar;
