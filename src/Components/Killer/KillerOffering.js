import ReactTooltip from 'react-tooltip';
import { Markup } from 'interweave';

const KillerOffering = (props) => {
	const { offering } = props;

	return (
		<div className="killer-offering">
			<span>Offering</span>
			<img
				src={`./Assets/Killers/Offerings/${offering.name}.png`}
				alt={offering.name}
				className={`offering-${offering.rarity}`}
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

export default KillerOffering;
