import KillerPower from './KillerPower';

const KillerChar = (props) => {
	const { addons, name, img, power } = props.char;

	return (
		<div className="killer-char">
			<div>
				<h1>{name}</h1>
				<img src={img} alt={name} />
			</div>
			<KillerPower power={power} addons={addons} />
		</div>
	);
};

export default KillerChar;
