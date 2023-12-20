import getData from "../Server/getData"
import getBlobURI from "../Server/getBlobURI"

async function getClicks(images = null) {

    if (images && images.some(img => img !== 0)) return images
    
    const data = await getData('images')
    if (!data) return Array(10).fill(0)
    
    const imgs = data.images.sort((a,b) => a.order < b.order)
    
    const promises = imgs.map(async img => ({
        order: img.order,
        url: URL.createObjectURL(await getBlobURI(img.ref)),
        reference: img.ref,
        blob: await getBlobURI(img.ref)
    }))
    
    const functionalImgs = await Promise.all(promises)
    
    return functionalImgs

}

export default getClicks