
class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(element) {
    this.items.push(element);
  }

  deQueue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }

}

module.exports = Queue;