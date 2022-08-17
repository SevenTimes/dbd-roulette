import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const KillerAddons = (props) => {
	const { char, addons } = props;
	console.log(addons);

	return (
		<div className="killer-addons">
			<span>Addons</span>
			<div className="addons-container">
				{addons.map((addon, index) => {
					const addonName = addon.name.replace(/[":%]+/g, '');
					return (
						<div
							data-tip
							data-for={`addon-${index}`}
							key={addon.name}
							className={`addon addon-${addon.rarity}`}
						>
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
		</div>
	);
};

export default KillerAddons;
