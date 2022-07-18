class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    // _hash is a method that is only used in other methods
    // hash table lengths are optimal on prime numbers
    // the .length of the string key + for loop will determine the array position 0-6
    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
        return this
    }
}

let myHashTable = new HashTable()
myHashTable.set('shoes', 11)
myHashTable.set('hat', 45)

//need to figure out a way to print hashtable. probably need recursion
// using chrome dev tools to see results
console.log(myHashTable)