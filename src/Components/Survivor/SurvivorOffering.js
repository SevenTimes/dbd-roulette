const SurvivorOffering = (props) => {
	const { offering } = props;
	return (
		<div>
			<img
				src={`./Assets/Survivors/Offerings/${offering.name}.png`}
				alt={offering.name}
			/>
		</div>
	);
};

export default SurvivorOffering;
