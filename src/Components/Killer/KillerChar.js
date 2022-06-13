const KillerChar = (props) => {
	const { char } = props;

	return (
		<div className="killer-char">
			<span>{char}</span>
			<div>
				<img
					src={`./Assets/Killers/Characters/${char}/${char}.png`}
					alt={char}
					className="killer-char-icon"
				/>
			</div>
		</div>
	);
};

export default KillerChar;
