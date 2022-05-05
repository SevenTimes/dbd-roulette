import SurvivorItemAddon from './SurvivorItemAddon';

const SurvivorItem = (props) => {
	const { item, addons } = props.item;

	return (
		<div>
			<div>
				<img
					src={`./Assets/Survivors/Items/${item.type}/${item.name}.png`}
					alt={item.name}
				/>
				<p>{item.name}</p>
			</div>
			{addons.map((addon) => {
				return (
					<SurvivorItemAddon
						itemType={item.type}
						addon={addon}
						key={addon.name}
					/>
				);
			})}
		</div>
	);
};

export default SurvivorItem;
