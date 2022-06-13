import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const KillerPerk = (props) => {
	const { perk } = props;
	const perkName = perk.name.replace(/[":]+/g, '');

	return (
		<div data-tip data-for={`perk-${props.index}`}>
			<img src={`./Assets/Killers/Perks/${perkName}.png`} alt={perk.name} />
			<ReactTooltip className="tooltip" id={`perk-${props.index}`}>
				<h4>{perk.name}</h4> <br />
				<Markup content={perk.description} />
			</ReactTooltip>
		</div>
	);
};

export default KillerPerk;
