export function quickSort(inputArray) {
	const array = inputArray;
	const smaller = [];
	const larger = [];
	if (array.length <= 1) return array;

	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[0]) smaller.push(array[i]);
		if (array[i] >= array[0]) larger.push(array[i]);
	}
	return quickSort(smaller).concat(array[0], quickSort(larger));
}
