const KillerPower = (props) => {
	const { char, power } = props;

	return (
		<div className="killer-power">
			<span>Power</span>
			<img
				src={`./Assets/Killers/Characters/${char}/${power}.png`}
				alt={power}
			/>
		</div>
	);
};

export default KillerPower;
