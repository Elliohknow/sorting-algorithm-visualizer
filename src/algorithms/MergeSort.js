// export function mergeSort(array) {
// 	if (array.length <= 1) return array;

// 	const midpoint = Math.floor(array.length / 2);
// 	const firstHalf = mergeSort(array.slice(0, midpoint));
// 	const secondHalf = mergeSort(array.slice(midpoint));

// 	return merge(firstHalf, secondHalf);
// }

// function merge(first, second) {
// 	const array = [];
// 	let i = 0, j = 0;

// 	while(i < first.length && j < second.length) {
// 		if (first[i] < second[j]) {
// 			array.push(first[i]);
// 			i++;
// 		} else {
// 			array.push(second[j]);
// 			j++;
// 		}
// 	}

// 	return array.concat(first.slice(i)).concat(second.slice(j));
// }
export function mergeSort(array) {
  if (array.length <= 1) return array;

  const midpoint = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, midpoint));
  const secondHalf = mergeSort(array.slice(midpoint));
  // console.log(midpoint);
  // console.log(firstHalf);
  // console.log(secondHalf);
  return merge(firstHalf, secondHalf);
}

function merge(first, second) {
  const array = [];
  let i = 0,
    j = 0;

  while (i < first.length && j < second.length) {
    if (first[i].value < second[j].value) {
      array.push(first[i]);
      i++;
    } else {
      array.push(second[j]);
      j++;
    }
  }
  console.log(array.concat(first.slice(i)).concat(second.slice(j)));
  return array.concat(first.slice(i)).concat(second.slice(j));
}
