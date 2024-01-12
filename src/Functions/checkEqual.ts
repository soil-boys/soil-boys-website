function checkEqual(arr1: Object[], arr2: Object[]): boolean {
    if (!arr1 || !arr2) return true
    if (![arr1, arr2].some(arr => typeof arr === 'object')) return true

    return (JSON.stringify(arr1) === JSON.stringify(arr2))
}

export default checkEqual