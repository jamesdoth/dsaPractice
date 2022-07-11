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
    printAll() {
        if(!this.root) {
            return console.log(undefined)
        }
        let temp = this.root
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
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
}


let myTree = new BST()
myTree.insert(74)
myTree.insert(7)
myTree.insert(13)
myTree.insert(128)
myTree.insert(96)

console.log(myTree)