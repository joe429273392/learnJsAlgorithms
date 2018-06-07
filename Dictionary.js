
class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    } else {
      return false;
    }
  }

  has(key) {
    return key in this.items;
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }
} 

module.exports = Dictionary;