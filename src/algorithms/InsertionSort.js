// export function insertionSort(inputArray) {
// 	const array = inputArray;
// 	for (let i = 1; i < array.length; i++) {
// 		let key = array[i];
// 		let j = i - 1;
// 		while (j >= 0 && array[j] > key) {
// 			array[j + 1] = array[j];
// 			j = j - 1;
// 		}
// 		array[j + 1] = key;
// 	}
// 	return array;
// };

// https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c

export function insertionSort(inputArray) {
  const array = inputArray;
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j].value > key.value) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}
