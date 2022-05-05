const KillerPerk = (props) => {
	const { perk } = props;
	const perkName = perk.name.replace(/[":]+/g, '');

	return (
		<div className={`perk perk-${props.index + 1}`}>
			<img src={`./Assets/Killers/Perks/${perkName}.png`} alt={perk.name} />
		</div>
	);
};

export default KillerPerk;
