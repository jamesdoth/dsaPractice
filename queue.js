class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    printAll() {
        if(!this.first) {
            return console.log(undefined)
        }
        let temp = this.first
        while(temp) {
            console.log(temp)
            temp = temp.next
        }
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.first) {
            return undefined
        }
        let temp = this.first
        if(this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }
}

let myQueue = new Queue(7)
myQueue.enqueue(32)
myQueue.dequeue()

myQueue.printAll()