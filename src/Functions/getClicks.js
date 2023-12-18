import getData from "../Server/getData"
import getDownloadURI from "../Server/getDownloadURI"

async function getClicks(images = null) {

    if (images && images.some(img => img !== 0)) return images
    
    const data = await getData('images')
    if (!data) return Array(10).fill(0)
    
    const imgs = data.images.sort((a,b) => a.order < b.order)
    
    const promises = imgs.map(async img => ({
        order: img.order,
        url: await getDownloadURI(img.ref),
        reference: img.ref
    }))
    
    const functionalImgs = await Promise.all(promises)
    
    return functionalImgs

}

export default getClicks