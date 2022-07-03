class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // printAll() {
    //     for (let temp = this.head; temp != null; temp = temp.next) {
    //         console.log(temp)
    //     }
    // }

    printAll() {
        let temp = this.head
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    
    pop() {
        if (this.length == 0) {
            return null
        }
        let temp = this.head
        let pre = this.head
        while(temp.next != null) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
}




let myLinkedList = new LinkedList(7)

myLinkedList.push(4)
myLinkedList.push(23)
myLinkedList.push(12)
myLinkedList.push(5)
myLinkedList.pop()

myLinkedList.printAll()