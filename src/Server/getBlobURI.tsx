import { storage } from "../Firebase.tsx";
import { getBlob, ref } from "firebase/storage";

async function getBlobURI(reference: string | undefined) {

    const fileRef = ref(storage, reference)
    const url = await getBlob(fileRef)

    return url

}

export default getBlobURI