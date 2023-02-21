/* Write your class below */
class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(item) {
    this.stack[this.length++] = item;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  pop() {
    return this.stack.splice(this.stack.length - 1, 1);
  }
  peek() {
    return this.stack[this.stack.length - 1] || null;
  }
  print() {
    console.log(this.stack);
  }
}
class MinStack {
  constructor() {
    this.stack = [];
    this.length = 0;
    this.minimum = new Stack();
  }
  push(item) {
    if (this.isEmpty()) {
      this.stack[this.length++] = item;
      this.minimum.push(item);
    } else {
      this.stack[this.length++] = item;
      if (this.minimum.peek() > item) {
        this.minimum.push(item);
      }
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let removedItem = this.stack.splice(this.stack.length - 1, 1);
    if (this.minimum.peek() == removedItem[0]) {
      this.minimum.pop();
    }
  }
  peek() {
    return this.stack[this.stack.length - 1] || null;
  }
  print() {
    console.log(this.stack);
  }
  getMin() {
    if (this.isEmpty()) {
      return null;
    }
    return this.minimum.peek();
  }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack();
ms.push(17);
ms.push(12);
ms.push(31);

console.log(ms.getMin()); //12
ms.pop();
ms.pop();
ms.pop();
console.log(ms.getMin()); //null
ms.push(19);
ms.push(21);
console.log(ms.getMin()); //19
ms.push(3);
console.log(ms.getMin()); //3
ms.pop(); //
ms.pop();
console.log(ms.getMin()); //19
/* Do not remove the exports below */
module.exports = MinStack;
///3
///21
///19
