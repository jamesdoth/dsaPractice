class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    printAll() {
        if(!this.head) {
            return console.log(undefined)
        }
        let temp = this.head
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
    }
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) {
            return undefined
        }
        let temp = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if(!this.head) {
            return undefined
        }
        let temp = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }
}


let myDoublyLinkedList = new DoublyLinkedList(5)
myDoublyLinkedList.push(13)
myDoublyLinkedList.pop()
myDoublyLinkedList.unshift(3)
myDoublyLinkedList.shift()


myDoublyLinkedList.printAll()