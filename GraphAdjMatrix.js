const priorityQueue = require("./PriorityQueue");

//const INF = Number.MAX_SAFE_INTEGER;
const INF = "#";

class Graph {
  constructor(length, type = 0) {
    this.type = type;
    this.length = length;
    this.matrix = initializeMatrix(this.length);
  }

  addEdge(v, w, weight = 0) {
    this.matrix[v][w] = weight;
    if (this.type === 0) {
      this.matrix[w][v] = weight;
    }
  }

  toString() {
    let rs = "";
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        rs += this.matrix[i][j] + " ";
      }
      rs += "\n";
    }
    return rs;
  }

  // 单源最短路径 O(v^2)
  dijkstra(src) {
    let dist = [],
      visited = [],
      length = this.length;

    for (let i = 0; i < length; i++) {
      dist[i] = INF;
      visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length - 1; i++) {
      let u = minDistance(dist, visited);
      visited[u] = true;
      for (let v = 0; v < length; v++) {
        if (
          !visited[v] &&
          this.matrix[u][v] != 0 &&
          dist[u] != INF &&
          dist[u] + this.matrix[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + this.matrix[u][v];
        }
      }
    }
    return dist;
  }

  // 任意顶点之间的最短路径 O(v^3)
  floyd() {
    let dist = [],
      length = this.length,
      i,
      j,
      k;

    for (i = 0; i < length; i++) {
      dist[i] = [];
      for (j = 0; j < length; j++) {
        dist[i][j] = this.matrix[i][j];
      }
    }

    for (k = 0; k < length; k++) {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    return dist;
  }

  // 最小生成树
  prim() {
    let parent = [],
      visited = [],
      length = this.length,
      key = [];

    for (let i = 0; i < length; i++) {
      key[i] = INF;
      visited[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for (let i = 0; i < length - 1; i++) {
      let u = minKey(key, visited);
      visited[u] = true;

      for (let v = 0; v < length; v++) {
        if (
          this.matrix[u][v] &&
          visited[v] === false &&
          this.matrix[u][v] < key[v]
        ) {
          parent[v] = u;
          key[v] = this.matrix[u][v];
        }
      }
    }
    return parent;
  }

  kruskal() {
    let queue = new priorityQueue(),
      length = this.length,
      set = new Set();

    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        queue.enQueue("(" + i + "," + j + ")", this.matrix[i][j]);
      }
    }
  }
}

function initializeMatrix(length) {
  let matrix = new Array(length);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(length);
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = i === j ? 0 : INF;
    }
  }
  return matrix;
}

function minDistance(dist, visited) {
  let min = INF,
    minIndex = -1;
  for (let i = 0; i < dist.length; i++) {
    if (visited[i] === false && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}

function minKey(key, visited) {
  let min = INF,
    minIndex = -1;
  for (let i = 0; i < key.length; i++) {
    if (visited[i] === false && key[i] <= min) {
      min = key[i];
      minIndex = i;
    }
  }
  return minIndex;
}

module.exports = Graph;
