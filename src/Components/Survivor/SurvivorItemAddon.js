const SurvivorItemAddon = (props) => {
	const { name, icon } = props;

	return (
		<div>
			<img src={icon} alt={name} />
		</div>
	);
};

export default SurvivorItemAddon;
