const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log("horizontaljoin", horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //vertical join
    const verticalJoin = [];
    console.log(letters[0][0], letters[1][0]);
    console.log(letters[0][0], letters[0[0]);
    /*     for(let x=0;x<letters.length;x++){
            for(let y=0;y<letters[0].length;y++) {
                console.log(letters[y][x]);
            }
        } */
    return false;
}

module.exports = wordSearch