
class Search {
  constructor() {
    this.array = [];
  }

  insert(item) {
    this.array.push(item);
  }

  toString() {
    return this.array.join();
  }

  createTestArray(size) {
    for (let i = 0; i < size; i++) {
      this.array.push(getRandomInt(size));
    }
  }

  sequentialSearch(item) {
    for (let i = 0; i < this.array.length; i++) {
      if (item === this.array[i]) {
        return i;
      }
    }
    return -1;
  }

  binarySearch(item) {
    let low = 0,
      high = this.array.length - 1,
      mid;
    
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (item < array[mid]) {
        high = mid - 1;
      } else if (item > array[mid]) {
        low = mid;
      } else {
        return mid;
      }
    }
    return -1;
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = Search;