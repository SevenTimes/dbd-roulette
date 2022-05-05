import KillerPower from './KillerPower';

const KillerChar = (props) => {
	const { char, addons, power } = props;

	return (
		<div className="killer-char">
			<img
				src={`./Assets/Killers/Characters/${char}/${char}.png`}
				alt={char}
				className="killer-char-icon"
			/>
			<KillerPower char={char} power={power} addons={addons} />
		</div>
	);
};

export default KillerChar;
