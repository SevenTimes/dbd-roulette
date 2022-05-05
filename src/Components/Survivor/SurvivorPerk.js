const SurvivorPerk = (props) => {
	const { perk } = props;
	const perkName = perk.name.replace(/[":]+/g, '');

	return (
		<div>
			<img src={`./Assets/Survivors/Perks/${perkName}.png`} alt={perk.name} />
			<p>{perk.name}</p>
		</div>
	);
};

export default SurvivorPerk;
