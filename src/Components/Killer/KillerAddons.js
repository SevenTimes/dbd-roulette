import { shuffleArray } from '../../Utils/shuffleArray';
import './KillerAddons.css';

const KillerAddons = (props) => {
	const randomAddons = shuffleArray(props.addons).slice(0, 2);

	return (
		<div className="killer-addons">
			{randomAddons.map((addon) => {
				return <img src={addon.icon} alt={addon.name} key={addon.name} />;
			})}
		</div>
	);
};

export default KillerAddons;
