const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log("horizontaljoin",horizontalJoin)
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}

module.exports = wordSearch