import KillerAddons from './KillerAddons';

const KillerChar = (props) => {
	const { addons, name, img } = props.char;

	return (
		<div className="killer-char">
			<div>
				<h1>{name}</h1>
				<img src={img} alt={name} />
			</div>
			<KillerAddons addons={addons} />
		</div>
	);
};

export default KillerChar;
