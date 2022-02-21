import SurvivorItemAddon from './SurvivorItemAddon';

const SurvivorItem = (props) => {
	const { item, addons } = props;

	return (
		<div>
			<div>
				<img src={item.icon} alt={item.name} />
				<p>{item.name}</p>
			</div>
			{addons.map((addon) => {
				return (
					<SurvivorItemAddon
						name={addon.name}
						icon={addon.icon}
						key={addon.name}
					/>
				);
			})}
		</div>
	);
};

export default SurvivorItem;
