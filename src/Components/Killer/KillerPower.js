import KillerAddons from './KillerAddons';
import './KillerPower.css';

const KillerPower = (props) => {
	const { name, icon } = props.power;

	return (
		<div className="killer-power-container">
			<div className="killer-power">
				<img src={icon} alt={name} />
			</div>
			<KillerAddons addons={props.addons} />
		</div>
	);
};

export default KillerPower;
