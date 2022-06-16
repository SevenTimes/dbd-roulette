import KillerPerk from '../Components/Killer/KillerPerk';
import SurvivorPerk from '../Components/Survivor/SurvivorPerk';

export const getPerks = (side, perks) => {
	switch (side) {
		case 'killer':
			return perks.map((perk, index) => {
				return <KillerPerk perk={perk} key={perk.name} index={index} />;
			});
		case 'survivor':
			return perks.map((perk, index) => {
				return <SurvivorPerk perk={perk} key={perk.name} index={index} />;
			});

		default:
			break;
	}
};
