import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const KillerAddons = (props) => {
	const { char, addons } = props;

	return (
		<div className="killer-addons">
			{addons.map((addon, index) => {
				const addonName = addon.name.replace(/[":%]+/g, '');
				return (
					<div data-tip data-for={`addon-${index}`} key={addon.name}>
						<img
							src={`./Assets/Killers/Characters/${char}/Addons/${addonName}.png`}
							alt={addon.name}
						/>
						<ReactTooltip className="tooltip" id={`addon-${index}`}>
							<h4>{addon.name}</h4>
							<Markup content={addon.description} />
						</ReactTooltip>
					</div>
				);
			})}
		</div>
	);
};

export default KillerAddons;
