import KillerAddons from './KillerAddons';

const KillerPower = (props) => {
	const { char, addons, power } = props;

	return (
		<div className="killer-power-container">
			<div className="killer-power">
				<img
					src={`./Assets/Killers/Characters/${char}/${power}.png`}
					alt={power}
				/>
			</div>
			<KillerAddons char={char} addons={addons} />
		</div>
	);
};

export default KillerPower;
