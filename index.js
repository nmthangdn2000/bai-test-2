const c = [60, 40, 55, 75, 64];
const arr1 = [];
const arr2 = [];
function alternatingSums(a) {
  const c = [60, 40, 55, 75, 64];
  for (let i = 0; i < c.length; i++) {
    if (i % 2 === 0) arr1.push(c[i]);
    else arr2.push(c[i]);
  }
  const result = [];
  let sum = 0;
  arr1.forEach((e) => (sum += e));
  result.push(sum);
  sum = 0;
  arr2.forEach((e) => (sum += e));
  result.push(sum);
  return result;
}
console.log(alternatingSums(c));

const arr = [2, 3, -5, -2, 4];
function adjacentElementsProduct(inputArray) {
  const a = [];
  for (let index = 0; index < inputArray.length - 1; index++) {
    a.push(inputArray[index] * inputArray[index + 1]);
  }
  return a.sort((s1, s2) => s1 - s2)[a.length - 1];
}
console.log(adjacentElementsProduct(arr));
