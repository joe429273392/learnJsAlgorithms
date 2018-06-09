const Dictionary = require('./Dictionary');
const Stack = require('./Stack');
const Queue = require('./Queue');

class Graph {
  constructor(type = 0) {
    this.type = type;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertices(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    if(this.type === 0) {
      this.adjList.get(w).push(v);
    }
  }

  toString() {
    let rs = '';
    for (let i = 0; i < this.vertices.length; i++) {
      rs += this.vertices[i] + ' -> ';
      let neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        rs += neighbors[j] + ' ';
      }
      rs += '\n';
    }
    return rs;
  }

  dfs(callback) {
    let color = initializeColor(this);
    for (let i = 0; i < this.vertices.length; i++) {
      if(color[this.vertices[i]] === 'white') {
        this.dfsVisit(this.vertices[i], color, callback);
      }
    }
  }

  dfsVisit(v, color, callback) {
    color[v] = 'grey';
    if(callback) {
      callback(v);
    }
    let neighbors = this.adjList.get(v);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if(color[w] === 'white') {
        this.dfsVisit(w, color, callback);
      }
    }
    color[v] = 'black';
  }

  DFS() {
    let color = initializeColor(this);
    let d = [];
    let f = [];
    let p = [];
    this.time = 0;
    for (let i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0;
      f[this.vertices[i]] = 0;
      p[this.vertices[i]] = null;
    }
    for (let i = 0; i < this.vertices.length; i++) {
      if(color[this.vertices[i]] === 'white') {
        this.DFSVisit(this.vertices[i], color, d, f, p);
      }
    }

    return {
      discovere : d,
      finish : f,
      pre : p
    }
  }

  DFSVisit(u, color, d, f, p) {
    console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++this.time;

    let neighbors = this.adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      p[w] = u;
      if(color[w] === 'white') {
        this.DFSVisit(w, color, d, f, p);
      }
    }
    f[u] = ++this.time;
    color[u] = 'black';
    console.log('explored ' + u);
  }

  bfs(v, callback) {
    let queue = new Queue();
    let color = initializeColor(this);
    queue.enQueue(v);

    while(!queue.isEmpty()) {
      let u = queue.deQueue();
      color[u] = 'grey';
      for (let i = 0; i < this.adjList.get(u).length; i++) {
        if(color[this.adjList.get(u)[i]] === 'white') {
          color[this.adjList.get(u)[i]] = 'grey';
          queue.enQueue(this.adjList.get(u)[i]);
        }
      }
      color[u] = 'black';
      if(callback) {
        callback(u);
      }
    }
  }

  // 改进版 求最短路径
  BFS(v) {
    let queue = new Queue();
    let color = initializeColor(this);
    let d = [];
    let pre = [];
    queue.enQueue(v);

    for (let i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0;
      pre[this.vertices[i]] = null;
      
    }

    while(!queue.isEmpty()) {
      let u = queue.deQueue();
      let neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if(color[w] === 'white') {
          d[w] = d[u] + 1;
          pre[w] = u;
          color[w] = 'grey';
          queue.enQueue(w);
        }
      }
      
      color[u] = 'black';
    }

    return {
      distance : d,
      pre : pre
    }
  }

}

function initializeColor(Graph) {
  let color = [];
  for (let i = 0; i < Graph.vertices.length; i++) {
    color[Graph.vertices[i]] = 'white';
  }
  return color;
}

module.exports = Graph;