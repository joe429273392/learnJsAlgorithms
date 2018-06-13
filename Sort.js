
class Sort {
  constructor() {
    this.array = [];
  }

  insert(item) {
    this.array.push(item);
  }

  toString() {
    return this.array.join();
  }

  // 冒泡排序 10W个数排序 68.041秒 时间复杂度 O(n^2)
  bubbleSort() {
    let length = this.array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length-i-1; j++) {
        if (this.array[j] > this.array[j+1] ) {
          swap(this.array, j, j+1);
        }
      }
    }
  }

  // 选择排序 10W个数排序 9.08秒 时间复杂度 O(n^2)
  selectionSort() {
    let length = this.array.length,
      indexMin;
    for (let i = 0; i < length-1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j;
        } 
      }
      if (i !== indexMin) {
        swap(this.array, i, indexMin);
      }
    }
  }

  // 插入排序 10W个数排序 3.39秒 最坏情况时间复杂度 O(n^2)
  insertionSort() {
    let length = this.array.length,
      temp, j;
    for (let i = 1; i < length; i++) {
      temp = this.array[i];
      j = i;
      while (j > 0 && this.array[j-1] > temp) {
        this.array[j] = this.array[j-1];
        j--;
      }
      this.array[j] = temp;
    }
  }

  // 归并排序 10W个数排序 67毫秒 时间复杂度 O(nlgn)
  mergeSort() {
    this.array = mergeSortRec(this.array);
  }

  // 快速排序 10W个数排序 26毫秒 时间复杂度 O(nlgn)
  quickSort() {
    quick(this.array, 0, this.array.length-1);
  }

  heapSort() {
    
  }

  createTestArray(size) {
    for (let i = 0; i < size; i++) {
      this.array.push(getRandomInt(size));
    }
  }
}

function swap(array, index1, index2) {
  // let tmp = array[index1];
  // array[index1] = array[index2];
  // array[index2] = tmp;
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function mergeSortRec(array) {
  let length = array.length;
  if (length === 1) {
    return array;
  }

  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
  let result = [],
  il = 0, ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}

function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
  }
  if (left < index - 1) {
    quick(array, left, index - 1);
  }
  if (right > index ) {
    quick(array, index, right);
  }
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

module.exports = Sort;