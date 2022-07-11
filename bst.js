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
        let temp = this.root
        if(!this.root) {
            this.root = newNode
        }
        while(!this.root) {
            if(newNode === temp) {
                return undefined
            }
        }
    }
}


let myTree = new BST()
