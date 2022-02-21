const SurvivorChar = (props) => {
	const { name, img } = props.char;
	return (
		<div>
			<h1>Name: {name}</h1>
			<img src={img} alt={name} />
		</div>
	);
};

export default SurvivorChar;
