import { storage } from "../Firebase";
import { getBlob, ref } from "firebase/storage";

async function getBlobURI(reference: String) {

    const fileRef = ref(storage, reference)
    const url = await getBlob(fileRef)

    return url

}

export default getBlobURI