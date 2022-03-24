import killers from '../../Data/killers.json';
import KillerChar from './KillerChar';
import KillerPerk from './KillerPerk';
import KillerOffering from './KillerOffering';
import './Killer.css';

import { shuffleArray } from '../../Utils/shuffleArray';
import { useState } from 'react';

const Killer = () => {
	const { characters: chars, perks, offerings } = killers;

	const [randomChar, setRandomChar] = useState(shuffleArray(chars)[0]);
	const [randomPerks, setRandomPerks] = useState(
		shuffleArray(perks).slice(0, 4)
	);
	const [randomOffering, setRandomOffering] = useState(
		shuffleArray(offerings)[0]
	);

	const handleRandom = () => {
		setRandomChar(shuffleArray(chars)[0]);
		setRandomPerks(shuffleArray(perks).slice(0, 4));
		setRandomOffering(shuffleArray(offerings)[0]);
	};

	return (
		<div className="killer-container">
			<KillerChar char={randomChar} />
			<div className="perk-container">
				{randomPerks.map((perk, index) => {
					return <KillerPerk perk={perk} key={perk.name} index={index} />;
				})}
			</div>
			<KillerOffering offering={randomOffering} />
			<button onClick={handleRandom}>Randomize</button>
		</div>
	);
};

export default Killer;
