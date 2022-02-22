import KillerAddon from './KillerAddon';

const KillerChar = (props) => {
	const { addons, name, img } = props.char;
	console.log(props);
	console.log(name);

	return (
		<div className="killer-char">
			<div>
				<h1>{name}</h1>
				<img src={img} alt={name} />
			</div>
			<KillerAddon addons={addons} />
		</div>
	);
};

export default KillerChar;
