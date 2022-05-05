const SurvivorItemAddon = (props) => {
	const { itemType, addon } = props;

	return (
		<div>
			<img
				src={`./Assets/Survivors/Items/${itemType}/Item Addons/${addon.name}.png`}
				alt={addon.name}
			/>
		</div>
	);
};

export default SurvivorItemAddon;
