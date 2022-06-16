import survivors from '../../Data/survivors';
import SurvivorChar from './SurvivorChar';
import SurvivorItem from './SurvivorItem';
import SurvivorOffering from './SurvivorOffering';
import SurvivorItemAddons from './SurvivorItemAddons';

import './Survivor.css';

import { shuffleArray } from '../../Utils/shuffleArray';
import { getPerks } from '../../Utils/getPerks';
import { useState } from 'react';

const Survivor = () => {
	const { characters: chars, items, perks, offerings } = survivors;

	const getItemWithAddons = () => {
		const itemType = shuffleArray(items);
		const item = shuffleArray(itemType.item);
		const addons = shuffleArray(itemType.addons, 2);
		return { item, addons };
	};

	const [randomChar, setRandomChar] = useState(shuffleArray(chars));
	const [randomPerks, setRandomPerks] = useState(shuffleArray(perks, 4));
	const [randomItem, setRandomItem] = useState(getItemWithAddons());
	const [randomOffering, setRandomOffering] = useState(shuffleArray(offerings));

	const handleRandom = () => {
		const tempRandomChar = shuffleArray(chars);
		setRandomChar(tempRandomChar);
		setRandomPerks(shuffleArray(perks, 4));
		setRandomOffering(shuffleArray(offerings));
		setRandomItem(getItemWithAddons());
	};

	return (
		<>
			<div className="survivor-container">
				<SurvivorChar char={randomChar.name} />
				<div>
					<div className="top-row">
						<SurvivorItem item={randomItem.item} />
						<SurvivorItemAddons
							addons={randomItem.addons}
							itemType={randomItem.item.type}
						/>
						<SurvivorOffering offering={randomOffering} />
					</div>
					<div className="perk-container">
						<span>Perks</span>
						<div>{getPerks('survivor', randomPerks)}</div>
					</div>
				</div>
			</div>
			<button onClick={handleRandom}>Randomize</button>
		</>
	);
};

export default Survivor;
