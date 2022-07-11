class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    printAll() {
        let temp = this.head
        if(!this.head) {
            return console.log(undefined)
        }
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
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) {
            return undefined
        }
        let temp = this.head
        let pre = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        }
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
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
            temp.next = null
        }
        this.length--
        return temp
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    set(index, value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if(index < 0 || index > this.length) {
            return false
        }
        if(index === 0) {
            return this.unshift(value)
        }
        if(index === this.length) {
            return this.push(value)
        }
        const newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined
        }
        if(index === 0) {
            return this.shift()
        }
        if(index === this.length - 1) {
            return this.pop()
        }
        let pre = this.get(index - 1)
        let temp = pre.next
        pre.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse() {
        if(this.length === 0) {
            return undefined
        }
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let after = temp.next
        let before = null
        for(let i = 0; i < this.length; i++) {
            after = temp.next
            temp.next = before
            before = temp
            temp = after
        }
        return this
    }
}

let myLinkedList = new LinkedList(23)
myLinkedList.push(4)
myLinkedList.push(12)
myLinkedList.push(78)
myLinkedList.pop()
myLinkedList.unshift(7)
myLinkedList.shift()
myLinkedList.shift()
myLinkedList.shift()



myLinkedList.printAll()