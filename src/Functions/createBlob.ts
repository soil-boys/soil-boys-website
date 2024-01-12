const createBlob = async (blobUrl: string) => {

    if (!blobUrl) return null

    const data = await fetch(blobUrl)
    const blob = await data.blob()
    return blob

}

export default createBlob