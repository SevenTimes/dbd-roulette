const KillerAddons = (props) => {
	const { char, addons } = props;

	return (
		<div className="killer-addons">
			{addons.map((addon) => {
				const addonName = addon.name.replace(/[":]+g/, '');
				return (
					<img
						src={`./Assets/Killers/Characters/${char}/Addons/${addonName}.png`}
						alt={addon.name}
						key={addon.name}
					/>
				);
			})}
		</div>
	);
};

export default KillerAddons;
