"use strict";
var a = [12, 3, 4, 11, 1, 124, 2];
var b = [12, 3, 4, 11, 1, 124, 2];
var c = [12, 3, 4, 11, 1, 124, 2];
var d = [12, 3, 4, 11, 1, 124, 2];
var e = [12, 3, 4, 11, 1, 124, 2];
var f = [12, 3, 4, 11, 1, 124, 2];
var g = [12, 3, 4, 11, 1, 123, 2];
var h = [12, 3, 4, 11, 1, 123, 2];
var i = [12, 3, 4, 11, 1, 123, 2];
// swap
var swap = function (array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
// isSorted
var isSorted = function (arr) {
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1 - 1] > arr[i_1]) {
            return false;
        }
    }
    return true;
};
// bubble sort
var bubblesort = function (arr) {
    var n = arr.length;
    for (var i_2 = 0; i_2 < n; i_2++) {
        for (var j = 0; j < n - i_2 - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};
// recursive bubble sort
// issue: return type undefined
var recBubbleSort = function (arr, n) {
    if (n == 1) {
        return console.log(arr);
    }
    for (var i_3 = 0; i_3 < n - 1; i_3++) {
        if (arr[i_3] > arr[i_3 + 1]) {
            swap(arr, i_3, i_3 + 1);
        }
    }
    recBubbleSort(arr, n - 1);
};
//selection sort
var selectionsort = function (arr) {
    var n = arr.length;
    for (var i_4 = 0; i_4 < n - 1; i_4++) {
        var minIndex = i_4;
        for (var j = i_4 + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i_4);
    }
    return arr;
};
// insertion sort
var insertionSort = function (arr) {
    var n = arr.length;
    for (var i_5 = 0; i_5 < n; i_5++) {
        var key = arr[i_5];
        var j = i_5 - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};
// gnome sort
var gnomeSort = function (arr) {
    var i = 0;
    var n = arr.length;
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
    var index;
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
var bogoSort = function (arr) {
    var shuffle = function (arr) {
        for (var i_6 = 0; i_6 < arr.length; i_6++) {
            swap(arr, i_6, Math.round(Math.random() * i_6));
        }
        return arr;
    };
    while (isSorted(arr) == false) {
        shuffle(arr);
    }
    return arr;
};
// mergeSort
var mergeSort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};
var merge = function (left, right) {
    var result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
var sortedArray = quickSort(f, 0, f.length - 1);
console.log(sortedArray);
console.log(bubblesort(a));
console.log(selectionsort(b));
recBubbleSort(c, c.length);
console.log(insertionSort(d));
console.log(gnomeSort(e));
//console.log(bogoSort(g));
console.log(mergeSort(h));
