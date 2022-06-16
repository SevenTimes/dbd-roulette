import killers from '../../Data/killers.json';
import KillerChar from './KillerChar';
import KillerPower from './KillerPower';
import KillerAddons from './KillerAddons';
import KillerOffering from './KillerOffering';

import './Killer.css';

import { shuffleArray } from '../../Utils/shuffleArray';
import { getPerks } from '../../Utils/getPerks';
import { useState } from 'react';

const Killer = () => {
	const { characters: chars, perks, offerings } = killers;

	const [randomChar, setRandomChar] = useState(shuffleArray(chars));
	const [randomAddons, setRandomAddons] = useState(
		shuffleArray(randomChar.addons, 2)
	);
	const [randomPerks, setRandomPerks] = useState(shuffleArray(perks, 4));
	const [randomOffering, setRandomOffering] = useState(shuffleArray(offerings));

	const handleRandom = () => {
		const tempRandomChar = shuffleArray(chars);
		setRandomChar(tempRandomChar);
		setRandomAddons(shuffleArray(tempRandomChar.addons, 2));
		setRandomPerks(shuffleArray(perks, 4));
		setRandomOffering(shuffleArray(offerings));
	};

	return (
		<>
			<div className="killer-container">
				<KillerChar char={randomChar.name} />
				<div>
					<div className="top-row">
						<KillerPower char={randomChar.name} power={randomChar.power.name} />
						<span>+</span>
						<KillerAddons char={randomChar.name} addons={randomAddons} />
						<KillerOffering offering={randomOffering} />
					</div>
					<div className="perk-container">
						<span>Perks</span>
						<div>{getPerks('killer', randomPerks)}</div>
					</div>
				</div>
			</div>
			<button onClick={handleRandom}>Randomize</button>
		</>
	);
};

export default Killer;
