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
        // if(this.length === 0) {
        //     return undefined
        // }
        if(!this.head) {
            return undefined
        }
        let temp = this.head
        let pre = this.head
        // while(temp.next != null) {
        //     pre = temp
        //     temp = temp.next
        // }
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
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
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
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
        // 'if temp -> is pointing to a node'
        if(temp) {
            temp.value = value
            // need return to stop if statements from running
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
        const temp = this.get(index - 1)
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
        const pre = this.get(index - 1)
        const temp = pre.next
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
    arr() {
        let temp = this.head
        let arr = []
        while(temp) {
            arr.push(temp.value)
            temp = temp.next
        }
        return arr
    }
}

let myLinkedList = new LinkedList(7)

myLinkedList.push(4)
myLinkedList.push(23)
myLinkedList.push(12)
myLinkedList.push(5)
myLinkedList.pop()
myLinkedList.unshift(1)
myLinkedList.shift()
myLinkedList.set(1,5)
myLinkedList.insert(1,10)
myLinkedList.remove(-3)

// myLinkedList.printAll()

// // console.log(myLinkedList.get(0))
// console.log(myLinkedList.remove(-3))

// myLinkedList.reverse()
// myLinkedList.printAll()

console.log(myLinkedList)

let myLinkedListArr = myLinkedList.arr()

// these methods are from the es5 library
myLinkedListArr.pop()
myLinkedListArr.unshift(32)
console.log(myLinkedListArr)

// const toArray = (sll) => {
//     if(!sll) {
//         return [];
//     }
//     return [sll.value].concat(this.toArray(sll.next));
// }
