import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const SurvivorItem = (props) => {
	const { name, type, description, rarity } = props.item;
	return (
		<div className="survivor-item" data-tip data-for="item">
			<span>Item</span>
			<img
				src={`./Assets/Survivors/Items/${type}/${name}.png`}
				alt={name}
				className={`item-${rarity}`}
			/>
			<ReactTooltip className="tooltip" id="item">
				<h4>{name}</h4>
				<Markup content={description} />
			</ReactTooltip>
		</div>
	);
};

export default SurvivorItem;
