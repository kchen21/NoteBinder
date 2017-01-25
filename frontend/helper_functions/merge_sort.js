const mergeSort = (arr, cb) => {
  if (arr.length <= 1) {
    return arr;
  }

  if (!cb) {
    cb = (a, b) => {
      if (a < b) {
        return -1;
      } else if (a === b) {
        return 0;
      } else {
        return 1;
      }
    };
  }

  const leftHalf = arr.slice(0, arr.length / 2);
  const rightHalf = arr.slice(arr.length / 2, arr.length);

  const sortedLeftHalf = mergeSort(leftHalf, cb);
  const sortedRightHalf = mergeSort(rightHalf, cb);

  const sortedArr = [];

  while (sortedLeftHalf.length > 0 && sortedRightHalf.length > 0) {
    switch (cb(sortedLeftHalf[0], sortedRightHalf[0])) {
      case -1:
        sortedArr.push(sortedLeftHalf.shift());
        break;
      case 0:
        sortedArr.push(sortedLeftHalf.shift());
        break;
      case 1:
        sortedArr.push(sortedRightHalf.shift());
        break;
      default:
        throw new Error('Invalid Callback');
    }
  }

  return sortedArr.concat(sortedLeftHalf).concat(sortedRightHalf);
};

export default mergeSort;
