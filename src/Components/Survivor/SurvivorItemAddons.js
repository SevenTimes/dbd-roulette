import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const SurvivorItemAddons = (props) => {
	const { addons, itemType } = props;
	return (
		<div className="item-addons">
			<span>Addons</span>
			<div className="addons-container">
				{addons.map((addon, index) => {
					const addonName = addon.name.replace(/[":%]+/g, '');
					return (
						<div data-tip data-for={`addon-${index}`} key={addon.name}>
							<img
								src={`./Assets/Survivors/Items/${itemType}/Item Addons/${addonName}.png`}
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
		</div>
	);
};

export default SurvivorItemAddons;
