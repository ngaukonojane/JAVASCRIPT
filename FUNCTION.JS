function listArray(array) {
  var list = 0;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function nth(list, t) {
  if (!list)
    return undefined;
  else if (t == 0)
    return list.value;
  else
    return nth(list.rest, t - 1);
}

console.log(nth(listArray([20, 30, 40]), 1));



const v = (list,t) => =(nth(listArray([20, 30, 40]), 1));
