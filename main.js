const Stack = require('./Stack');
const Queue = require('./Queue');
const LinkedList = require('./LinkedList');
const DoubleLinkedList = require('./DoubleLinkedList');
const Set = require('./Set');
const Dictionary = require('./Dictionary');
const BST = require('./BinarySearchTree');
const Graph = require('./GraphAdjMatrix');
const Sort = require('./Sort');
const Search = require('./Search');
// let G = new Graph();
// G.addVertices('A');
// G.addVertices('B');
// G.addVertices('C');
// G.addVertices('D');
// G.addVertices('E');
// G.addVertices('F');
// G.addEdge('A','B');
// G.addEdge('A','C');
// G.addEdge('B','C');
// G.addEdge('B','D');
// G.addEdge('D','E');
// G.addEdge('C','F');
// G.DFS();

let s = new Search();
//s.createTestArray(100000);
let a = [1,3,4,6,7,8,9,12,15,20,23,56];
for (let i = 0; i < a.length; i++) {
  s.insert(a[i]);
}
console.log(s.toString());
let start = Date.now();
console.log(s.sequentialSearch(8));
let end = Date.now();
//console.log(s.toString());
console.log('time : ' + (end - start));