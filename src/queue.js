const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  getUnderlyingList(firstItem = this.first) {
    return ({value:firstItem.value, next:firstItem.next != null ? this.getUnderlyingList(firstItem.next) : null});
  }
  enqueue(value) {
    if (this.first === null) {
      this.first = new ListNode();
      this.first.value = value;
      this.last = this.first;
    } else {
      const newItem = new ListNode();
      newItem.value = value;
      this.last.next = newItem;
      this.last = newItem;
    }
  }

  dequeue() {
    let topEl = this.first.value;
    if (!this.first.next) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    return topEl;
  }
}

module.exports = {
  Queue
};
