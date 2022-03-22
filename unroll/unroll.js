function unroll(squareArray) {
    let n = 0
    let unrolled = []

    while(unrolled.length < squareArray.length**2){
        let i = n
        let j = n

        while(j < squareArray.length - n){
            unrolled.push(squareArray[i][j])
            j++
        }

        j--
        i++

        while(i < squareArray.length - n){
            unrolled.push(squareArray[i][j])
            i++
        }

        i--

        while(j > n){
            j--
            unrolled.push(squareArray[i][j])
        }

        i--

        while(i > n){
            unrolled.push(squareArray[i][j])
            i--
        }
        n++
    }

    return unrolled;
}

module.exports = unroll;
