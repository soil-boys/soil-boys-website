import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase.tsx";
import { v4 as uuidv4 } from "uuid";

const postBlob = async (blob: Blob | null) => {

    if (!blob) return

    try {
        const storageRef = ref(storage, `clicks/${uuidv4()}.jpg`)
    
        const blobRef: string = await uploadBytes(storageRef, blob).then(snapshot => snapshot.ref.fullPath)
        return blobRef
    } catch (err) {
        return null
    }

}

export default postBlob