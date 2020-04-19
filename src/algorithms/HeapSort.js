// amazing article on heap sort from which I'm pulling this implementation.
// https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82

// time complexity: O(n log n), space complexity: in-place

export function heapSort(inputArray) {
	const array = inputArray;
	// Build our max heap.
	buildMaxHeap(array);

	// Find last element.
	let lastElement = array.length - 1;

	// Continue heap sorting until we have
	// just one element left in the array.
	while (lastElement > 0) {
		swap(array, 0, lastElement);

		heapify(array, 0, lastElement);

		lastElement -= 1;
	}
	return array;
}

function buildMaxHeap(array) {
	let i = Math.floor(array.length / 2 - 1);

	// Build a max heap out of
	// all array elements passed in.
	while (i >= 0) {
		heapify(array, i, array.length);
		i -= 1;
	}
}

function heapify(heap, i, max) {
	let index, leftChild, righChild;

	while (i < max) {
		index = i;

		leftChild = 2 * i + 1;
		righChild = leftChild + 1;

		if (leftChild < max && heap[leftChild] > heap[index]) {
			index = leftChild;
		}

		if (righChild < max && heap[righChild] > heap[index]) {
			index = righChild;
		}

		if (index === i) {
			return;
		}

		swap(heap, i, index);

		i = index;
	}
}

function swap(array, firstItemIndex, lastItemIndex) {
	let tmp = array[firstItemIndex];

	// Swap first and last elements in the array.
	array[firstItemIndex] = array[lastItemIndex];
	array[lastItemIndex] = tmp;
}
