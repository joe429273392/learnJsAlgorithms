// 动态规划 DP

// 打工问题
class workItem {
  constructor(start, end, money) {
    this.start = start;
    this.end = end;
    this.money = money;
  }
}

class DPSolveWorkProblem {
  constructor(workTable) {
    this.workTable = workTable;
    this.prev = [];
    this.OPT = [];
  }

  // mark: think about how to optimize  now O(n^2)
  getPrev() {
    let length = this.workTable.length;
    this.prev[0] = 0;
    for (let i = 1; i < length; i++) {
      this.prev[i] = 0;
      for (let j = i-1; j > 0; j--) {
        if (this.workTable[i].start >= this.workTable[j].end) {
          this.prev[i] = j;
          break;
        }
      }
    }
  }

  getOPT() {
    let length = this.workTable.length;
    this.OPT[0] = 0;
    this.OPT[1] = this.workTable[1].money;
    for (let i = 2; i < length; i++) {
      this.OPT[i] = Math.max(this.OPT[i-1], this.OPT[this.prev[i]] + this.workTable[i].money);
    }
  }

  solve() {
    this.getPrev();
    this.getOPT();
  }
}

// WorkProblem test

// let workTable = [];
// workTable.push(0);
// workTable.push(new workItem(1,4,5));
// workTable.push(new workItem(3,5,1));
// workTable.push(new workItem(0,6,8));
// workTable.push(new workItem(4,7,4));
// workTable.push(new workItem(3,8,6));
// workTable.push(new workItem(5,9,3));
// workTable.push(new workItem(6,10,2));
// workTable.push(new workItem(8,11,4));

// let WorkProblem = new DPSolveWorkProblem(workTable);
// WorkProblem.solve();
// console.log(WorkProblem.OPT);


// 选数组中非相邻数字 和最大的一堆数字
// mark : think about how to return the result array instead of the sum!
class arraySumProblem {
  constructor(array) {
    this.array = array;
    this.OPT = [];
  }

  solve() {
    let arr = this.array, tmp;
    this.OPT[0] = arr[0];
    this.OPT[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
      this.OPT[i] = Math.max(this.OPT[i-1], this.OPT[i-2] + arr[i]);
    }
  }
}

// arraySumProblem test

// let arraySum = new arraySumProblem([1,2,4,1,7,8,3]);
// arraySum.solve();
// console.log(arraySum.OPT);

// 从数组中选出一堆数组和为给定值

class subSet {
  constructor (arr, sum) {
    this.arr = arr;
    this.sum = sum;
    this.OPTarray = new Array(this.arr.length);
    for (let i = 0; i < this.arr.length; i++) {
      this.OPTarray[i] = new Array(this.sum + 1);
      this.OPTarray[i][0] = new Array();
    }
    for (let s = 0; s < this.sum+1; s++) {
      this.OPTarray[0][s] = this.arr[0] === s ? (new Array(s)) : false;
    }
    for (let i = 1; i < this.arr.length; i++) {
      for (let s = 1; s < this.sum + 1; s++) {
        if (this.OPTarray[i] > s) {
          this.OPTarray[i][s] = this.OPTarray[i-1][s].concat();
        } else {
          if(this.OPTarray[i-1][s]) {
            this.OPTarray[i][s] = this.OPTarray[i-1][s].concat();
          } else if (this.OPTarray[i-1][s-this.arr[i]]) {
            this.OPTarray[i][s] = this.OPTarray[i-1][s-this.arr[i]].concat(this.arr[i]);
          } else {
            this.OPTarray[i][s] = false;
          }
        }
      }
    }
  }

}

// subSet test
let DPSubSet = new subSet([3,34,4,12,5,2], 9);
console.log(DPSubSet.OPTarray[5][9]);

class minCoinChange {
  constructor(coins) {
    this.coins = coins;
  }

  recSolve(amount) {
    let length = this.coins.length;
    return this.rec(length - 1, amount);
  }

  rec(coin, amount) {
    if (amount === 0) {
      return true;
    } 
    else if (coin === 0) {
      return (amount % this.coins[coin] === 0);
    }
    else if (this.coins[coin] > amount) {
      return this.recSolve(coin - 1, amount);
    }
    else {
      return (this.recSolve(coin, amount - this.coins[coin]) || this.recSolve(coin - 1, amount))
    }

  }
}

