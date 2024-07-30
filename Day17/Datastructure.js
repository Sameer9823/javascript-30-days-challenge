const node = {
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:null
            }
        }
    }
}
console.log(node);


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        }
        add(value) {
            const newNode = new Node(value);
            if(!this.head){
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next){
                    current = current.next;
                }
                current.next = newNode;
            }
}
        removeNode(){
            if(!this.head){
                return;
        }
        if(!this.head.next){
            this.head = null
        } else {
            let current = this.head;
            while (current.next.next){
                current = current.next;
        }
        current.next = null;
    }
    }
    display() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();

list.removeNode();
list.display();

list.removeNode();
list.display();

list.removeNode();
list.display();

class stack {
    constructor() {
        this.stack = [];
}
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length - 1];
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    size(){
        return this.stack.length;
    }
    display(){
        console.log(this.stack.join(' -> '));
    }
}

const stc =new stack();
stc.push(1);
stc.push(2);
stc.push(3);

console.log(stc.peek());

stc.display();

console.log(stc.pop());
console.log(stc.peek());

stc.display()

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(' <- '));
    }
}

function reverseString(str) {
    const stack = new Stack();
    
    for (let char of str) {
        stack.push(char);
    }
    
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}


const originalString = "sameer";
const reversedString = reverseString(originalString);
console.log(reversedString); 

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
        }
        dequeue(){
            if (this.isEmpty()) {
                throw new Error("Queue is empty");
                }
                return this.items.shift();
                }
                front(){
                    if (this.isEmpty()) {
                        throw new Error("Queue is empty");
                }
                return this.items[0];
                }
                isEmpty(){
                    return this.items.length === 0;
                }
                size(){
                    return this.items.length;
                }
                display(){
                    console.log(this.items.join(' <- '));
                }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());

queue.display();

console.log(queue.dequeue());
console.log(queue.front());

queue.display();

class PrintJob {
    constructor(jobId, documentName) {
        this.jobId = jobId;
        this.documentName = documentName;
    }

    toString() {
        return `Job ID: ${this.jobId}, Document: ${this.documentName}`;
    }
}

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Added to queue: ${job}`);
    }

    processJobs() {
        while (!this.queue.isEmpty()) {
            const job = this.queue.dequeue();
            console.log(`Processing job: ${job}`);
        }
    }
}

const printerQueue = new PrinterQueue();

const job1 = new PrintJob(1, "Document1.pdf");
const job2 = new PrintJob(2, "Document2.docx");
const job3 = new PrintJob(3, "Document3.xlsx");

printerQueue.addJob(job1);
printerQueue.addJob(job2);
printerQueue.addJob(job3);

console.log("Starting job processing...");
printerQueue.processJobs();

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node, result = []){
    if(node === null){
        return;
    }
    inOrderTraversal(node.left, result);

    result.push(node.value);

    inOrderTraversal(node.right, result);

    return result;
}
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);


const result = inOrderTraversal(root);
console.log(result);


class graph{
    constructor(){
        this.adjacencyList = {}
        }
        addvertex(vertex) {
            if (!(vertex in this.adjacencyList)) {
                this.adjacencyList[vertex] = [];
            }
        }
        addedges(vertex1, vertex2) {
            if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
                throw new Error('Both vertices must exist in the graph');
            }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }
    bfs(startvertex) {
        if (!(startvertex in this.adjacencyList)) {
            throw new Error('Start vertex must exist in the graph');
        }
        const visited = new Set();
        const queue = [];
        const result = [];
        visited.add(startvertex);
        queue.push(startvertex);
        while(queue.length > 0){
            const vertex = queue.shift();
            result.push(vertex);
            const neighbors = this.adjacencyList[vertex];
            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }        

    }
}
return result;
    }
}
const graph1 = new graph();
graph1.addvertex('A');
graph1.addvertex('B');
graph1.addvertex('C');
graph1.addvertex('D');
graph1.addedges('A', 'B');
graph1.addedges('A', 'C');
graph1.addedges('B', 'D');
const result1 = graph1.bfs('A');
console.log(result1); 

class Graph2 {
    constructor() {
        this.adjacencyList = {}; 
    }

    addVertex(vertex) {
        if (!(vertex in this.adjacencyList)) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdges(vertex1, vertex2) {
        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            throw new Error('Both vertices must exist in the graph');
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    shortestPath(startVertex, endVertex) {
        if (!(startVertex in this.adjacencyList) || !(endVertex in this.adjacencyList)) {
            throw new Error('Both vertices must exist in the graph');
        }

        const visited = new Set();
        const queue = [[startVertex]]; 
        const result = [];

        visited.add(startVertex);

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === endVertex) {
                return path;
            }

            const neighbors = this.adjacencyList[vertex];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]); 
                }
            }
        }

        return null; 
    }
}


const graph2 = new Graph2();
graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addVertex('E');

graph2.addEdges('A', 'B');
graph2.addEdges('A', 'C');
graph2.addEdges('B', 'D');
graph2.addEdges('C', 'D');
graph2.addEdges('D', 'E');

const shortestPath = graph2.shortestPath('A', 'E');
console.log("Shortest Path from A to E:", shortestPath); 

