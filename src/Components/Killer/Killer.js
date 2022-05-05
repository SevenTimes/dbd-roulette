import killers from '../../Data/killers.json';
import KillerChar from './KillerChar';
import KillerPerk from './KillerPerk';
import KillerOffering from './KillerOffering';

import { shuffleArray } from '../../Utils/shuffleArray';
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
		<div className="killer-container">
			<h1>{randomChar.name}</h1>
			<>
				<KillerOffering offering={randomOffering} />
				<KillerChar
					char={randomChar.name}
					power={randomChar.power.name}
					addons={randomAddons}
				/>
			</>
			<div className="perk-container">
				{randomPerks.map((perk, index) => {
					return <KillerPerk perk={perk} key={perk.name} index={index} />;
				})}
			</div>
			<button onClick={handleRandom}>Randomize</button>
		</div>
	);
};

export default Killer;
