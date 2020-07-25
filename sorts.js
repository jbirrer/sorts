var a = [12, 3, 4, 11, 1, 124, 2];
var b = [12, 3, 4, 11, 1, 124, 2];
var c = [12, 3, 4, 11, 1, 124, 2];
var d = [12, 3, 4, 11, 1, 124, 2];
var e = [12, 3, 4, 11, 1, 124, 2];
// swap
var swap = function (array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
// bubble sort
var bubblesort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
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
    for (var i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
    recBubbleSort(arr, n - 1);
};
//selection sort
var selectionsort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
    return arr;
};
// insertion sort
var insertionSort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
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
console.log(bubblesort(a));
console.log(selectionsort(b));
recBubbleSort(c, c.length);
console.log(insertionSort(d));
console.log(gnomeSort(e));
