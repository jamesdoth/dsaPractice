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
        let temp = this.head
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
    }
}

let myDoublyLinkedList = new DoublyLinkedList(5)


myDoublyLinkedList.printAll()