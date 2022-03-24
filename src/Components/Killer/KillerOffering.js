import './KillerOffering.css';

const KillerOffering = (props) => {
	const { name, icon } = props.offering;

	return (
		<div className="killer-offering">
			<img src={icon} alt={name} />
		</div>
	);
};

export default KillerOffering;
