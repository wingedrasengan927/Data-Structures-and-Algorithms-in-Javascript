// https://www.youtube.com/watch?v=5cU1ILGy6dM
// https://medium.com/javascript-in-plain-english/javascript-what-is-a-binary-search-tree-a602155abae4
// using recursion

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(root=null) {
        this.root = root;
    }

    insertHelper (newNode, currentNode) {
        if (newNode.value > currentNode.value) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
                return;
            } else {
                return this.insertHelper(newNode, currentNode.right);
            }
        } else if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return;
            } else {
                return this.insertHelper(newNode, currentNode.left);
            }
        } else { // return undefined if the value we want to insert already exists
            return undefined;
        }
    }

    insert(value) {
        const newNode = new TreeNode(value);
        let currentNode = this.root;
        
        if (!currentNode) {
            this.root = newNode;
            return;
        }

        return this.insertHelper(newNode, currentNode)
    }

    lookupHelper(value, currentNode) {
        if (currentNode === null) {
            return undefined;
        } else if (currentNode.value === value){
            return currentNode;
        } else if (value > currentNode.value) {
            return this.lookupHelper(value, currentNode.right);
        } else if (value < currentNode.value) {
            return this.lookupHelper(value, currentNode.left);
        }
    }

    lookup(value) {
        let currentNode =  this.root; 
        return this.lookupHelper(value, currentNode);
    }

    findMinNode (currentNode) {
        // find minimum value of a particular subtree
        // the argument should not be a null value
        if (currentNode.left == null) {
            return currentNode;
        } else {
            return this.findMinNode(currentNode.left);
        }
    }

    removeHelper(value, currentNode) {
        if (currentNode == null) {
            return null;
        }

        if (currentNode.value === value) { // we have found the node we wish to delete

            if (currentNode.left == null && currentNode.right == null) { // node doesn't have any children, we delete it
                return null;
            } else if (currentNode.left == null) { // node has no left child, we replace it with it's right child
                return currentNode.right;
            } else if (currentNode.right == null) { // node has no right child, we replace it with it's left child
                return currentNode.left;
            } else { // node has both the children
            // in this case, first we go to the right child of the node
            // and then we go all the way down to the most left subnode
            // i.e we get the minimum of the right subtree to ensure we have valid replacement
            let rightNode = currentNode.right;
            let minNode = this.findMinNode(rightNode);
            currentNode.value = minNode.value;
            // we remove the node that we replaced the deleted node
            currentNode.right = this.removeHelper(minNode.value, rightNode);
            return currentNode;
            } 
        } else if (value > currentNode.value) {
            currentNode.right = this.removeHelper(value, currentNode.right);
            return currentNode;
        } else {
            currentNode.left = this.removeHelper(value, currentNode.left);
            return currentNode;
        }
    }

    remove(value) {
        this.root = this.removeHelper(value, this.root);
    }
}