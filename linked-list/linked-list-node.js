class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// create elements
const elementA = new LinkedListNode(12);
const elementB = new LinkedListNode(42);
const elementC = new LinkedListNode(46);
const elementD = new LinkedListNode(31);

// link elements
elementA.next = elementB;
elementB.next = elementC;
elementC.next = elementD;

// traverse the linked list
var currentElement = elementA;
while (currentElement !== null) {
    console.log(currentElement.data);
    currentElement = currentElement.next;
}

module.exports = LinkedListNode;