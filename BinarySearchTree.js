
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new TNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  search(key) {
    return searchNode(this.root, key);
  }

  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    postOrderTraverse(this.root, callback);
  }

  min() {
    return minNode(this.root);
  }

  max() {
    return maxNode(this.root);
  }

  remove(key) {
    this.root = removeNode(this.root, key);
  }
}

class TNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

function inOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
  }
}

function PreOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node.key);
    PreOrderTraverseNode(node.left, callback);
    PreOrderTraverseNode(node.right, callback);
  }
}

function PostOrderTraverseNode(node, callback) {
  if (node !== null) {
    PostOrderTraverseNode(node.left, callback);
    PostOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
} 

function minNode(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  return false;
}

function maxNode(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  return false;
}

function searchNode(node, key) {
  if (node) {
    if (node.key > key) {
      return searchNode(node.left, key);
    } else if (node.key < key) {
      return searchNode(node.right, key);
    } else if (node.key === key) {
      return true;
    }
  } else {
    return false;
  }
}

function removeNode(node, key) {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key < node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    // 要移除的节点是叶子节点，直接把当前节点的引用改为空，返回修改其父节点的对应指针
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // 要移除的节点有一个子节点，直接把当前节点的引用改为其子节点的引用，返回
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // 要移除的节点有两个子节点，用其右子树的最小值去替换该节点
    let aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  }
}

function findMinNode(node){
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
}

module.exports = BinarySearchTree;