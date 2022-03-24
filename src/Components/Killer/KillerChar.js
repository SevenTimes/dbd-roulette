import KillerPower from './KillerPower';
import './KillerChar.css';

const KillerChar = (props) => {
	const { addons, name, img, power } = props.char;

	return (
		<div className="killer-char">
			<img src={img} alt={name} className="killer-char-icon" />
			<KillerPower power={power} addons={addons} />
		</div>
	);
};

export default KillerChar;
