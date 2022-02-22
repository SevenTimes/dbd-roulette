import { shuffleArray } from '../../Utils/shuffleArray';

const KillerAddon = (props) => {
	const randomAddons = shuffleArray(props.addons).slice(0, 2);

	return (
		<div className="killer-perks">
			{randomAddons.map((addon) => {
				return <img src={addon.icon} alt={addon.name} key={addon.name} />;
			})}
		</div>
	);
};

export default KillerAddon;
