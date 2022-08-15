/*
Pair Programming Activity performed on August 12, 2022 at 3:00 PM EST
Members
Gene T
*/

const createVerticalArrs = (arr) => {
    const outMatrix = [];
    
    for (let i = 0; i < arr[0].length; i++) {
      let outArr = [];
      for (let j = 0; j < arr.length; j++) {
        outArr.push(arr[j][i])
      }
      outMatrix.push(outArr);
    }
    return outMatrix;
  };
  
  const wordSearch = (letters, word) => { 
      if (letters.length === 0) {
          return false;
      }
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
          if (l.includes(word)) return true
      }
      const transposeLettters = createVerticalArrs(letters);
      const verticalsJoin = transposeLettters.map(ls => ls.join(''))
      for (l of verticalsJoin) {
          if (l.includes(word)) return true
      }
      return false;
  }
  
  module.exports = wordSearch