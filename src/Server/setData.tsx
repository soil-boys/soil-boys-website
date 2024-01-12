import { doc, setDoc } from 'firebase/firestore'
import { db } from '../Firebase.tsx'

async function setData(document: string, data: Object) {

    if (!document) return

    const docRef = doc(db, "clicks", document)
    await setDoc(docRef, data)

}

export default setData