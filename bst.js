class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true) {
            if(newNode === temp.value) {
                return undefined
            }
            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if(temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    contains(value) {
        if(!this.root) {
            return false
        }
        let temp = this.root
        while(temp) {
            if(value < temp.value) {
                temp = temp.left
            } else if(value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }
    minValueNode(currentNode) {
        while(currentNode.left != null) {
            currentNode = currentNode.left
        }
        return currentNode
    }
}


let myTree = new BST()
myTree.insert(74)
myTree.insert(7)
myTree.insert(13)
myTree.insert(128)
myTree.insert(96)

console.log(myTree)
console.log(myTree.contains(128))
console.log(myTree.contains(32))
console.log(myTree.minValueNode(myTree.root))
console.log(myTree.minValueNode(myTree.root.right))