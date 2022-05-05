import survivors from '../../Data/survivors';
import SurvivorChar from './SurvivorChar';
import SurvivorItem from './SurvivorItem';
import SurvivorOffering from './SurvivorOffering';
import SurvivorPerk from './SurvivorPerk';
import { shuffleArray } from '../../Utils/shuffleArray';
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
		<div className="survivor-container">
			<SurvivorChar char={randomChar} />
			<div className="perk-container">
				{randomPerks.map((perk) => {
					return <SurvivorPerk perk={perk} key={perk.name} />;
				})}
			</div>
			<SurvivorItem item={randomItem} />
			<SurvivorOffering offering={randomOffering} />
			<button onClick={handleRandom}>Randomize</button>
		</div>
	);
};

export default Survivor;
