const Set = require('./Set');

function union(SetA, SetB) {
  let unionSet = new Set();
  let values = SetA.values();
  for (let i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  values = SetB.values();
  for (let i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  return unionSet;
}

function intersection(SetA, SetB) {
  let intersectionSet = new Set();
  let values = SetA.values();
  for (let i = 0; i < values.length; i++) {
    if (SetB.has(values[i])) {
      intersectionSet.add(values[i]);
    }
  }
  return intersectionSet;
}

function difference(SetA, SetB) {
  let differenceSet = new Set();
  let values = SetA.values();
  for (let i = 0; i < values.length; i++) {
    if (!SetB.has(values[i])) {
      differenceSet.add(values[i]);
    }
  }
  return differenceSet;
}

function subSet(SetA, SetB) {
  if (SetA.size() > SetB.size()) {
    return false;
  }
  let values = SetA.values();
  for (let i = 0; i < values.length; i++) {
    if (!SetB.has(values[i])) {
      return false;
    }
  }
  return true;
}
