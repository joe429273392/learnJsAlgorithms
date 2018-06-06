
class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new DLNode(element),
      current = this.head,
      previous;

      if (position === 0) {
        if (!head) {
          this.head = node;
          this.tail = node;
        } else {
          current.previous = node;
          node.next = current
          this.head = node;
        }
      } else {
        for (let i = 0; i < position-1; i++) {
          current = current.next;
        }
        previous = current;
        current = current.next;

        node.previous = previous;
        node.next = current;
        previous.next = node;
        current.previous = node;
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
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.previous = null;
        }
      } else if (position === this.length-1) {
        current = tail;
        tail = current.previous;
        tail.next = null;
      } else {
        for (let i = 0; i < position-1; i++) {
          current = current.next;
        }
        previous = current;
        current = current.next;
        previous.next = current.next;
        current.next.previous = previous;
      }
      this.length --;

      return current.element;
    }else {
      return null;
    }
  }
}

class DLNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }

}

module.exports = DoubleLinkedList;