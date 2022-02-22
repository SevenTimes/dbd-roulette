const KillerPerk = (props) => {
	const { name, icon } = props.perk;

	return (
		<div>
			<img src={icon} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default KillerPerk;
