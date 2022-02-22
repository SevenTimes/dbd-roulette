import killers from '../../Data/killers.json';
import KillerChar from './KillerChar';
import KillerPerk from './KillerPerk';
import KillerOffering from './KillerOffering';
import { shuffleArray } from '../../Utils/shuffleArray';

const Killer = () => {
	const { characters: chars, perks, offerings } = killers;

	const randomChar = shuffleArray(chars)[0];

	const randomPerks = shuffleArray(perks).slice(0, 4);

	const randomOffering = shuffleArray(offerings)[0];

	return (
		<div>
			<KillerChar char={randomChar} />
			<div className="perk-container">
				{randomPerks.map((perk) => {
					return <KillerPerk perk={perk} key={perk.name} />;
				})}
			</div>
			<KillerOffering offering={randomOffering} />
		</div>
	);
};

export default Killer;
