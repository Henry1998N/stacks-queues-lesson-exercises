/* Write your class below */
const Queue = require("./Queue");
class DuoQueue {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
  enqueue(person, qNum) {
    if (qNum === 1) {
      this.q1.enqueue(person);
    } else {
      this.q2.enqueue(person);
    }
  }
  dequeue(qNum) {
    if (qNum === 1) {
      this.q1.dequeue();
    } else {
      this.q2.dequeue();
    }
  }
  getLongestQueue() {
    if (this.q1.queue.length > this.q2.queue.length) {
      return this.q1;
    }
    return this.q2;
  }
  getShortestQueue() {
    if (this.q1.queue.length < this.q2.queue.length) {
      return this.q1;
    }
    return this.q2;
  }
  balanceQueues() {
    let long = this.getLongestQueue();
    let short = this.getShortestQueue();
    while (long.queue.length - short.queue.length > 1) {
      short.enqueue(long.dequeue());
    }
  }
}

//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue();

//first set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(2, 2);
dq.enqueue(2, 2);
dq.dequeue(1);
dq.dequeue(1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues();
console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue;
