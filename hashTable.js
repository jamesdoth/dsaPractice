class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    // _hash is a method that is only used in other methods
    // hash table lengths are optimal on prime numbers
    // the .length of the key + for loop will determine the array position 0-6
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
}

let myHashTable = new HashTable()
console.log(myHashTable)