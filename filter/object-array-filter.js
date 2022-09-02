function filter(obj, name, value) {
  let resultArr = [];
  for (let object of obj) {
    if (object[name] === value) {
      resultArr.push(object);
    }
  }
  return resultArr;
}
export default filter;
