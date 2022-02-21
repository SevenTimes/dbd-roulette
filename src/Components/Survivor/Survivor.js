import survivors from '../../Data/survivors';
import SurvivorChar from './SurvivorChar';
import SurvivorItem from './SurvivorItem';

const Survivor = () => {
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	let isEventItemsEnabled = false; // Fake Event items check, remove later

	const { characters: chars, items } = survivors;
	const randomChar = shuffleArray(chars)[0];

	const randomItemFamily = shuffleArray(items)[0];
	const randomItemNormal = randomItemFamily.type.filter((el) => {
		return !el.event;
	});
	const randomItemType = isEventItemsEnabled
		? shuffleArray(randomItemFamily.type)[0]
		: shuffleArray(randomItemNormal)[0];

	const randomAddonsNormal = randomItemFamily.addons.filter((el) => {
		return !el.event;
	});
	const randomItemAddons = isEventItemsEnabled
		? shuffleArray(randomItemFamily.addons).slice(0, 2)
		: shuffleArray(randomAddonsNormal).slice(0, 2);

	return (
		<div>
			<SurvivorChar char={randomChar} />
			<SurvivorItem item={randomItemType} addons={randomItemAddons} />
		</div>
	);
};

export default Survivor;
