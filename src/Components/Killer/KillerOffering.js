const KillerOffering = (props) => {
	const { offering } = props;

	return (
		<div className="killer-offering">
			<img
				src={`./Assets/Killers/Offerings/${offering.name}.png`}
				alt={offering.name}
			/>
		</div>
	);
};

export default KillerOffering;
