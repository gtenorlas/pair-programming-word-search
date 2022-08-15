const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log("horizontaljoin", horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //vertical join
    const verticalJoin = [];
    console.log(letters[0]p0],letters)
/*     for(let x=0;x<letters.length;x++){
        for(let y=0;y<letters[0].length;y++) {
            console.log(letters[y][x]);
        }
    } */
    return false;
}

module.exports = wordSearch