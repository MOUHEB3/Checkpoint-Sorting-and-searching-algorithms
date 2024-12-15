function insertionSort(arr) {
    // Start from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  // The current element to be inserted into the sorted portion
        let j = i - 1;  // The index to compare with in the sorted portion

        // Shift elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key at the correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr)); 
