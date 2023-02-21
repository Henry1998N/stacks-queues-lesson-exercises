const Stack = require("./Stack");
const Queue = require("./Queue");

class MultiQueue {
  constructor(n) {
    this.queues = [];
    for (let i = 0; i < n; i++) {
      this.queues[i] = new Queue();
    }
  }
  //   queues() {
  //      console.log(this.queues);
  //   }
}

let mq = new MultiQueue(4);
console.log(mq.queues);
/*
[  
  Queue { queue: [] },
  Queue { queue: [] },
  Queue { queue: [] },
  Queue { queue: [] } 
]
*/
// let people = [
//   { name: "Claire", priority: "MED" },
//   { name: "Josh", priority: "HIGH" },
//   { name: "Tom", priority: "MED" },
//   { name: "Geoffery", priority: "LOW" },
// ];

// let stack = new Stack();
// let priorityQueue = new Queue();
// let medQueue = new Queue();
// let trashQueue = new Queue();

// people.forEach((p) => stack.push(p));

// const transfer = function (s) {
//   if (!s.length) {
//     return;
//   }

//   s.peek().priority === "HIGH"
//     ? priorityQueue.enqueue(s.pop().name)
//     : s.peek().priority === "MED"
//     ? medQueue.enqueue(s.pop().name)
//     : trashQueue.enqueue(s.pop().name);

//   transfer(s);
// };

// transfer(stack);
