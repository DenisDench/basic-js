module.exports = function countCats(backyard) {
  let cats = backyard.reduce((acc, subArray) => acc.concat(subArray), []);
  let count = 0;
  cats.forEach(item => {
    if(item == '^^') count++;
  });
  return count;
};