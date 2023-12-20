import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";

const postBlob = async (blob) => {

    if (!blob) return

    const storageRef = ref(storage, 'clicks')

    const blobRef = await uploadBytes(storageRef, blob).then(snapshot => snapshot.ref)
    return blobRef

}

export default postBlob
