module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
    return false;
  }

  const config = Object.fromEntries(bracketsConfig);

  const stack = [];
  [...str].forEach((char) => {
    if (char === config[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });
  return !stack.length;
};
