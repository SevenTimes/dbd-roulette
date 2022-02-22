import killers from '../../Data/killers.json';
import KillerChar from './KillerChar';
import KillerPerk from './KillerPerk';
import KillerOffering from './KillerOffering';
import { shuffleArray } from '../../Utils/shuffleArray';

const Killer = () => {
	const { characters: chars, perks, offerings } = killers;

	const randomChar = shuffleArray(chars)[0];

	return (
		<div>
			<KillerChar char={randomChar} />
		</div>
	);
};

export default Killer;
