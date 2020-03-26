// Reference: https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/

const LinkedListNode = require("./linked-list-node")

//  A symbol property is used instead of a string property to make it clear \
// that this property is not intended to be modified outside of the class.
const head = Symbol("head")

class LinkedList {
    constructor() {
        this[head] = null;
    }

    _getLastNode(node){
        // helper function to traverse to the end of the linked list and get the last node
        var currentNode = node;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode; 
    }

    addNode(data){ 
        // add a new node at the end
        // complexity O(n) but can be reduced to O(1) by tracking the tail
        const newNode = new LinkedListNode(data)
        if (!this[head]) {
            this[head] = newNode;
        } else {
            var lastNode = this._getLastNode(this[head]);
            lastNode.next = newNode;
        }
    }

    getNode(index){
        // get a node at a particular index
        if (index>-1){
            var i = 0;
            var currentNode = this[head];
            while ((currentNode !== null) && (i<index)) {
                currentNode = currentNode.next;
                i++;
            }
            return (currentNode !== null) ? currentNode.data : undefined;
        } else {
            return undefined;
        }
    }

    removeNode(index) {
        // remove a node at a particular index
        if (index > -1) {
             var currentNode = this[head];
             if (currentNode == null) { // list is empty
                 return undefined;
             }
             if (index == 0) { // we are removing the head
                this[head] = currentNode.next;
                return currentNode.data;
             }
             var previousNode;
             var i = 0;
             while ((currentNode !== null) && (i < index)) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
             }
             if (currentNode == null) { // check if index exceeds the list size
                return undefined;
             }
             previousNode.next = currentNode.next;
             return currentNode.data;
        } else {
            return undefined;
        }
    }

    *traverse(){
        var currentNode = this[head];
        while(currentNode !== null) {
            yield currentNode.data;
            currentNode = currentNode.next;
        }
    }

    [Symbol.iterator]() {
        return this.traverse();
    }
}

// creating the list
const list = new LinkedList();

// adding elements
list.addNode("yellow");
list.addNode("blue");
list.addNode("green");
list.addNode("orange");
list.addNode("pink");

// get the second item in the list
console.log(list.getNode(1))

// print out all the items
for (const color of list){
    console.log(color)
}

// remove the last item
console.log(list.removeNode(4));
console.log(list.getNode(3));


// convert to an array
const array1 = [...list.traverse()];
const array2 = [...list];
console.log(array1);
console.log(array2)