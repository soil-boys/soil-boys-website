const fill = (arr: Array) => {
    if (arr.length < 10) {
        const filler = Array(10 - arr.length).fill(0)
        const filledArr = arr.concat(filler)
        return filledArr
    } else return arr
}

export default fill