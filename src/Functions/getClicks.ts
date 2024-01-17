import { getData, getBlobURI } from "../Server"

interface Image {
    order: string,
    ref: string
}

async function getClicks(images: Object[] | null, reset = false) {

    if (!reset && images && images.some(img => img !== 0)) return images
    
    const data = await getData('clicks','images')
    if (!data) return Array(10).fill(0)
    
    const imgs = data.images.sort((a: Image, b: Image) => a.order < b.order)
    
    const promises = imgs.map(async (img: Image) => ({
        order: <string> img.order,
        url: <string> URL.createObjectURL(await getBlobURI(img.ref)),
        ref: <string> img.ref,
        blob: <Blob> await getBlobURI(img.ref)
    }))
    
    const functionalImgs = await Promise.all(promises)
    
    return functionalImgs

}

export default getClicks