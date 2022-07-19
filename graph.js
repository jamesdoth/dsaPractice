class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
}

let myGraph = new Graph()
myGraph.addVertex(1)
myGraph.addVertex(2)
console.log(myGraph)