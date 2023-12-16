import { storage } from "../Firebase";
import { getDownloadURL, ref } from "firebase/storage";

async function getDownloadURI(reference: String) {

    const fileRef = ref(storage, reference)
    const url = await getDownloadURL(fileRef)

    return url

}

export default getDownloadURI