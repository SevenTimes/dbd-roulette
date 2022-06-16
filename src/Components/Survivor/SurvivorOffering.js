import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const SurvivorOffering = (props) => {
	const { offering } = props;
	return (
		<div className="survivor-offering">
			<span>Offering</span>
			<img
				src={`./Assets/Survivors/Offerings/${offering.name}.png`}
				alt={offering.name}
				className={`addon-${offering.rarity}`}
				data-tip
				data-for="offering"
			/>
			<ReactTooltip className="tooltip" id="offering">
				<h4>{offering.name}</h4>
				<Markup content={offering.description} />
			</ReactTooltip>
		</div>
	);
};

export default SurvivorOffering;
