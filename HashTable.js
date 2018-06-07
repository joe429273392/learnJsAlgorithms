
class HashTable {
  constructor() {
    let table = [];
  }

  put(key, value) {
    let position = loseloseHashCode(key);
    console.log(position + '-' + key);
    table[position] = value;
  }

  remove(key) {
    table[loseloseHashCode(key)] = undefined;
  }

  get(key) {
    return table[loseloseHashCode(key)];
  }

}

function loseloseHashCode(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
}

module.exports = HashTable;