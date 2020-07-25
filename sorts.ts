let a: number[] = [12, 3, 4, 11, 1, 124, 2];
let b: number[] = [12, 3, 4, 11, 1, 124, 2];
let c: number[] = [12, 3, 4, 11, 1, 124, 2];
let d: number[] = [12, 3, 4, 11, 1, 124, 2];
let e: number[] = [12, 3, 4, 11, 1, 124, 2];

// swap

let swap = (array: number[], index1: number, index2: number) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

// bubble sort

let bubblesort = (arr:number[]) => {
  let n:number = arr.length;
  for (let i:number = 0; i < n; i++) {
    for (let j:number = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// recursive bubble sort
// issue: return type undefined

let recBubbleSort = (arr:number[], n: number) => {
    if (n == 1) {
        return console.log(arr);
    }
    for (let i:number = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
    recBubbleSort(arr, n - 1);
}

//selection sort

let selectionsort = (arr:number[]) => {
    let n:number = arr.length;
    for (let i:number = 0; i < n - 1; i++) {
        let minIndex:number = i;
        for (let j:number = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
    return arr;
}

// insertion sort

let insertionSort = (arr:number[]) => {
    let n:number = arr.length;
    for (let i:number = 0; i < n; i++) {
        let key:number = arr[i];
        let j:number = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// gnome sort

let gnomeSort = (arr:number[]) => {
    let i:number = 0;
    let n:number = arr.length;
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
