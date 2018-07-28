const Graph = require("./GraphAdjMatrix");

class MazeFactory {
  static Create(command) {
    const line1 = "3 3";
    const line2 =
      "0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
    const lenArray = line1.split(" ");
    const len = lenArray[0] * lenArray[1];
    //根据第一行的输入 3 3，生成一个9个顶点的图，用邻接矩阵进行存储
    let graph = new Graph(len);

    const edgeArray = line2.split(";");
    for (let i = 0; i < edgeArray.length; i++) {
      edgeArray[i] = edgeArray[i].split(" ");
      edgeArray[i][0] =
        parseInt(edgeArray[i][0].split(",")[0]) * lenArray[0] +
        parseInt(edgeArray[i][0].split(",")[1]);
      edgeArray[i][1] =
        parseInt(edgeArray[i][1].split(",")[0]) * lenArray[0] +
        parseInt(edgeArray[i][1].split(",")[1]);
    }
    // 上面的for循环目的是把输入的所有的边都转换成数字 0,0 => 0, 0,1 => 1 ... 2,2 => 8，  方便对应于图的顶点进行操作
    console.log(edgeArray);

    // 遍历刚才的edgeArray 把图中的边连通
    for (let i = 0; i < edgeArray.length; i++) {
      graph.addEdge(edgeArray[i][0], edgeArray[i][1]);
    }
    let maze = new Maze(graph, parseInt(lenArray[0]), parseInt(lenArray[1]));
    return maze;
  }
}

class Maze {
  constructor(graph, row, col) {
    this.graph = graph;
    this.row = row;
    this.col = col;
  }

  Render() {
    let str = "";
    // 用一个二维数组来保存要输出的结果，如果迷宫为3*3，则初始化一个7*7的二维数组
    let rs = new Array(this.row * 2 + 1);
    for (let i = 0; i < rs.length; i++) {
      rs[i] = new Array(this.col * 2 + 1);
      for (let j = 0; j < rs[i].length; j++) {
        if (i % 2 && j % 2) {
          rs[i][j] = "[R]";
        } else if (
          i > 0 &&
          i < rs.length - 1 &&
          j > 0 &&
          j < rs[i].length - 1 &&
          j % 2 === 0 &&
          i % 2 &&
          this.graph.matrix[((i - 1) / 2) * this.row + Math.floor((j - 1) / 2)][
            ((i - 1) / 2) * this.row + Math.floor((j - 1) / 2) + 1
          ] === 0
        ) {
          rs[i][j] = "[R]";
        } else if (
          i > 0 &&
          i < rs.length - 1 &&
          j > 0 &&
          j < rs[i].length - 1 &&
          i % 2 === 0 &&
          j % 2 &&
          this.graph.matrix[Math.floor((i - 1) / 2) * this.row + (j - 1) / 2][
            (Math.floor((i - 1) / 2) + 1) * this.row + (j - 1) / 2
          ] === 0
        ) {
          rs[i][j] = "[R]";
        } else {
          rs[i][j] = "[W]";
        }
      }
      str += rs[i].toString();
      str += "\n";
    }

    return str;
  }
}

const command = "";
const maze = MazeFactory.Create(command);
const str = maze.Render();
console.log(str);
