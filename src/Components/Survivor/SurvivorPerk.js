import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const SurvivorPerk = (props) => {
	const { perk } = props;
	const perkName = perk.name.replace(/[":]+/g, '');

	return (
		<div data-tip data-for={`perk-${props.index}`}>
			<img src={`./Assets/Survivors/Perks/${perkName}.png`} alt={perk.name} />
			<ReactTooltip className="tooltip" id={`perk-${props.index}`}>
				<h4>{perk.name}</h4>
				<Markup content={perk.description} />
			</ReactTooltip>
		</div>
	);
};

export default SurvivorPerk;
