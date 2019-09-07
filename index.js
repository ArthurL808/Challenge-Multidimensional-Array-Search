function locate(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        return true;
      }
      for (let x = 0; x < array[i][j].length; x++) {
        if (array[i][j][x] === target) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = locate;
