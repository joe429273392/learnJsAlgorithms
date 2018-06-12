const Queue = require('./Queue');

class PriorityQueue extends Queue{
  constructor() {
    super();
    this.items = [];
  }

  enQueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for( let i = 0; i < this.items.length; i++ ) {
      if( this.items[i].priority > queueElement.priority ) {
        this.items.splice( i, 0, queueElement );
        added = true;
        break;
      }
    }
    if(!added) {
      this.items.push(queueElement);
    }
  }

  print() {
    this.items.map(e => { console.log(`${e.element} - ${e.priority}`) });
  }
  
}

class QueueElement{
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

module.exports = PriorityQueue;