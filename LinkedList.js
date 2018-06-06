
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    let node = new LNode(element), current;

    if(this.head === null) {
      this.head = node;
    }else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length ++;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let current = this.head,
      node = new LNode(element),
      previous;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        for (let i = 0; i < position - 1; i++) {
          current = current.next;
        }
        previous = current;
        current = current.next;
        node.next = current;
        previous.next = node;
      }
      this.length ++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position) {
    if (position >= 0 && position <= this.length) {
      let current = this.head,
      previous;
      if (position === 0) {
        this.head = current.next;
        current = null;
      } else {
        for (let i = 0; i < position - 1; i++) {
          current = current.next;
        }
        previous = current;
        current = current.next;
        previous.next = current.next;
        current = null;
      }
    } else {
      return false;
    }
    

  }

  remove(element) {
    let current = this.head,
    previous;
    while (current) {
      if (current.element === element) {
        if (current === this.head) {
          this.head = current.next;
          current = null;
        } else {
          previous.next = current.next;
          current = null;
        }
        this.length -- ;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head, index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index ++;
      current = current.next();
    }
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let current = this.head;
    let rs = '';

    while (current) {
      rs += current.element +(current.next ? '-' : '');
      current = current.next;
    }
    return rs;
  }

  print() {
    console.log(this.toString());
  }
}

class LNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

module.exports = LinkedList;