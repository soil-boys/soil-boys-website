const fill = (arr: Array<Object>, limit: number = 10) => {
    if (arr.length < limit) {
        const filler = Array(limit - arr.length).fill(0)
        const filledArr = arr.concat(filler)
        return filledArr
    } else return arr
}

export default fill