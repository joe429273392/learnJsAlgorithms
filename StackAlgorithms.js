const Stack = require('./Stack');

// 十进制转二进制
function devideBy2(devNumer) {
  let remStack = new Stack(),
  binaryString = '',
  rem;

  while(devNumer > 0) {
    rem = Math.floor(devNumer % 2);
    remStack.push(rem);
    devNumer = Math.floor(devNumer / 2);
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

//console.log(devideBy2(15));