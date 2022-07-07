class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    printAll() {
        if(!this.top) {
            return console.log(undefined)
        }
        let temp = this.top
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
    }
}

let myStack = new Stack(8)


myStack.printAll()