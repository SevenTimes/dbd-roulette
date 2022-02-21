import survivors from '../../Data/survivors';
import SurvivorChar from './SurvivorChar';

const Survivor = () => {
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	const chars = survivors.characters;
	shuffleArray(chars);
	const randomChar = chars[0];

	return (
		<div>
			<SurvivorChar char={randomChar} />
		</div>
	);
};

export default Survivor;
