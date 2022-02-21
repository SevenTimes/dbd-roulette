const SurvivorOffering = (props) => {
	const { name, icon } = props.offering;
	return (
		<div>
			<img src={icon} alt={name} />
		</div>
	);
};

export default SurvivorOffering;
