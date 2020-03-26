// Reference: https://dev.to/emmabostian/stacks-vs-queues-in-javascript-4d1o

class Queue {
    constructor() {
        this.queue = [];
    }

    get length () {
        return this.queue.length;
    }

    enqueue (item) { // add elements to the end of the queue
        return this.queue.unshift(item); // unshift adds item at the beginning of the array
    }

    dequeue () { // remove items from the beginning of the queue
        return this.queue.pop();
    }
    
    peek () {
        return this.queue[this.queue.length - 1];
    }

    isEmpty () {
        return this.queue.length === 0;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Neeraj');
myQueue.enqueue('Peeps');
myQueue.enqueue('Harsha');
myQueue.enqueue('Amith');
console.log(myQueue.length); // 4
console.log(myQueue.peek()); // Neeraj
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek()); // Harsha