/*
1. Binary Tree - Each Tree can have either zero, one or two nodes, and each node can only have one parent.
2. Binary Search Tree - The Node to the right has value greater than the parent and the node to the left has value less than the parent
3. Balanced Tree - Each Node has two children and is balanced. Complexity is O(logn)
4. Unbalanced Tree - Each Node has either one or two children and is not balanced. Complexity is O(n)
   It resembles a linked list
*/

// without using recursion

class TreeNode{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(root=null) {
        this.root = root;
    }

    findParent(value) {
        // traverse down the tree starting from the root and find the relevant parent to insert the new node
        let currentNode = this.root;
        let parent;

        while(currentNode) {
            parent = currentNode;
            currentNode = (value > currentNode.value) ? currentNode.right : currentNode.left;
        }

        return parent;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        // check if the root is empty
        if (!this.root) {
            this.root = newNode;
        } else {
            let parent = this.findParent(value);
            if (value > parent.value) {
                parent.right = newNode;
            } else {
                parent.left = newNode;
            }
        }

        return newNode;
    }

    lookup(value) {
        let currentNode = this.root;
        let height = 0;

        while (currentNode) {
            if (currentNode.value === value) {
                console.log("Node found at height: " + height);
                return currentNode;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }

            height++;
        }

        console.log("Node not found, height reached is " + height);
        return undefined;
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);

console.log(myTree.lookup(6));