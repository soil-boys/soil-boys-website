import { postBlob, setData } from "../Server"
import createBlob from "./createBlob.ts"

interface Image {
    order: number,
    url: string,
    ref: string | null | undefined
}

interface ImagePostType {
    order: number,
    ref: string | null | undefined
}

const saveChanges = async (images: Image[]) => {

    let uploadArr: ImagePostType[] = images.map(image => ({
        order: image.order,
        ref: image.ref
    }))

    for (let image of images) {

        if (!image.ref) {
            const blob = await createBlob(image.url)
            const ref = await postBlob(blob)
            const imgIndex = images.indexOf(image)

            uploadArr[imgIndex].ref = ref
        } else continue

    }

    await setData('images', { images: uploadArr })

}

export default saveChanges