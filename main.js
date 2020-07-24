let a = [12, 3, 4, 11, 1, 124, 2];
let b = [12, 3, 4, 11, 1, 124, 2];
let c = [12, 3, 4, 11, 1, 124, 2];
let d = [12, 3, 4, 11, 1, 124, 2];

// swap

swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

// bubble sort

bubblesort = arr => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }

        }

    }
    return arr;
}

// recursive bubble sort
// issue: return type undefined

recBubbleSort = (arr, n) => {
    if (n === 1) {
        return arr;
    }
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
    recBubbleSort(arr, n - 1);
}

//selection sort

selectionsort = arr => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
    return arr;
}

console.log(bubblesort(a));
console.log(selectionsort(b));
console.log(recBubbleSort(c, c.length));


