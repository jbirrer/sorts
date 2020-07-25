let a = [12, 3, 4, 11, 1, 124, 2];
let b = [12, 3, 4, 11, 1, 124, 2];
let c = [12, 3, 4, 11, 1, 124, 2];
let d = [12, 3, 4, 11, 1, 124, 2];
let e = [12, 3, 4, 11, 1, 124, 2];

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
    if (n == 1) {
        return console.log(arr);
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

// insertion sort

insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// gnome sort

gnomeSort = (arr) => {
    let i = 0;
    let n = arr.length;
    while (i < n) {
        if (i == 0) { i++; }
        if (arr[i] > arr[i - 1]) {
            i++;
        }
        else{
            swap(arr, i, i-1);
            i--;
        }

    }
    return arr;
}

console.log(bubblesort(a));
console.log(selectionsort(b));
recBubbleSort(c, c.length);
console.log(insertionSort(d));
console.log(gnomeSort(e));


