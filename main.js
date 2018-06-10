const Stack = require('./Stack');
const Queue = require('./Queue');
const LinkedList = require('./LinkedList');
const DoubleLinkedList = require('./DoubleLinkedList');
const Set = require('./Set');
const Dictionary = require('./Dictionary');
const BST = require('./BinarySearchTree');
const Graph = require('./GraphAdjMatrix');

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

let G = new Graph(6,1);
G.addEdge(0,1,2);
G.addEdge(0,2,4);
G.addEdge(1,2,1);
G.addEdge(1,3,4);
G.addEdge(1,4,2);
G.addEdge(2,4,3);
G.addEdge(4,3,3);
G.addEdge(3,5,2);
G.addEdge(4,5,2);


console.log(G.dijkstra(0));