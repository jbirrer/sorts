"use strict";
let a = [12, 3, 4, 11, 1, 124, 2];
let b = [12, 3, 4, 11, 1, 124, 2];
let c = [12, 3, 4, 11, 1, 124, 2];
let d = [12, 3, 4, 11, 1, 124, 2];
let e = [12, 3, 4, 11, 1, 124, 2];
let f = [12, 3, 4, 11, 1, 124, 2];
let g = [12, 3, 4, 11, 1, 123, 2];
// swap
let swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
// isSorted
let isSorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
};
// bubble sort
let bubblesort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};
// recursive bubble sort
// issue: return type undefined
let recBubbleSort = (arr, n) => {
    if (n == 1) {
        return console.log(arr);
    }
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
    recBubbleSort(arr, n - 1);
};
//selection sort
let selectionsort = (arr) => {
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
};
// insertion sort
let insertionSort = (arr) => {
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
};
// gnome sort
let gnomeSort = (arr) => {
    let i = 0;
    let n = arr.length;
    while (i < n) {
        if (i == 0) {
            i++;
        }
        if (arr[i] > arr[i - 1]) {
            i++;
        }
        else {
            swap(arr, i, i - 1);
            i--;
        }
    }
    return arr;
};
// --quick sort------------------------------------------------------------------------
function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSort(arr, index, right);
        }
    }
    return arr;
}
// bogoSort
let bogoSort = (arr) => {
    let shuffle = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            swap(arr, i, Math.round(Math.random() * i));
        }
        return arr;
    };
    while (isSorted(arr) == false) {
        shuffle(arr);
    }
    return arr;
};
var sortedArray = quickSort(f, 0, f.length - 1);
console.log(sortedArray);
console.log(bubblesort(a));
console.log(selectionsort(b));
recBubbleSort(c, c.length);
console.log(insertionSort(d));
console.log(gnomeSort(e));
//console.log(bogoSort(g));
