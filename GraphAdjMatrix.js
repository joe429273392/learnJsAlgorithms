const INF = Number.MAX_SAFE_INTEGER;

class Graph {
  constructor(length, type = 0) {
    this.type = type;
    this.length = length;
    this.matrix = initializeMatrix(this.length);
  }

  addEdge(v, w, weight = 0) {
    this.matrix[v][w] = weight;
    if(this.type === 0) {
      this.matrix[w][v] = weight;
    }
  }

  toString() {
    let rs = '';
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        rs += this.matrix[i][j] + ' ';
      }
      rs += '\n';
    }
    return rs;
  }

  // 单源最短路径
  dijkstra(src) {
    let dist = [],
    visited = [],
    length = this.length;

    for (let i = 0; i < length; i++) {
      dist[i] = INF;
      visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length-1; i++) {
      let u = minDistance(dist, visited);
      visited[u] = true;
      for (let v = 0; v < length; v++) {
        if(!visited[v] && this.matrix[u][v] != 0 && dist[u] != INF && dist[u] + this.matrix[u][v] < dist[v]) {
          dist[v] = dist[u] + this.matrix[u][v];
        }
      }
    }
    return dist;
  }

  // 任意顶点之间的最短路径
  floyd() {

  }
}

function initializeMatrix(length) {
  let matrix = new Array(length);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(length);
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

function minDistance(dist ,visited) {
  let min = INF, minIndex = -1;
  for (let i = 0; i < dist.length; i++) {
    if(visited[i] === false && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}

module.exports = Graph;