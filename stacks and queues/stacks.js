// reference: https://dev.to/emmabostian/stacks-vs-queues-in-javascript-4d1o

class Stack{
    constructor(){
        this.stack = [];
    }

    get length() {
        return this.stack.length;
    }

    push(item) { // O(1)
        return this.stack.push(item);
    }

    pop(item) { // O(1)
        return this.stack.pop(item);
    }

    peek(item) { //O(1)
        return this.stack[this.length - 1];
    }

    isEmpty () {
        return this.stack.length === 0;
    }
}

const myStack = new Stack();
myStack.push('Neeraj');
myStack.push('Krishna');
console.log(myStack.length); // 2
console.log(myStack.peek()); // Krishna
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // Neeraj
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true