export const shuffleArray = (array, num) => {
	const newArray = array.slice();
	for (let i = newArray.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	if (num) {
		return newArray.slice(0, num);
	}
	return newArray[0];
};
