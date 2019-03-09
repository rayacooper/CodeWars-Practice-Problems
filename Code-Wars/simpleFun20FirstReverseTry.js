function firstReverseTry(arr) {
    if (arr.length > 1) {
       var first = arr[0];
      var last = arr[arr.length - 1];
      arr[0] = last;
      arr[arr.length - 1] = first;
      }
    return arr;
  }