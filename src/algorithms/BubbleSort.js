export function bubbleSort(inputArray) {
	// console.time('bubble');
	const array = inputArray;
	let swapped;
	// because do-while loops execute at least once
	do {
		swapped = false;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i+1);
				swapped = true;
			}
		}
	} while (swapped);
	// console.timeEnd('bubble');
	return array;
};

function swap(array, a, b) {
	let tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
}
