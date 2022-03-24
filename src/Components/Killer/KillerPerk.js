import './KillerPerk.css';

const KillerPerk = (props) => {
	const { name, icon } = props.perk;

	return (
		<div className={`perk perk-${props.index + 1}`}>
			<img src={icon} alt={name} />
		</div>
	);
};

export default KillerPerk;
