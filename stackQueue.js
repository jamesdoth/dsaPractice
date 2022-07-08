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
    push(value) {
        const newNode = new Node(value)
        if(!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.top) {
            return undefined
        }
        let temp = this.top
        if(this.length === 1) {
            this.top = null
        } else {
            this.top = this.top.next
            temp.next = null
        }
        this.length--
        return temp
    }
}

let myStack = new Stack(8)
myStack.push(23)
myStack.pop()


myStack.printAll()