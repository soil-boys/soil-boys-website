import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase.tsx'

async function getData(document: string) {

    if (!document) return

    const docRef = doc(db, "clicks", document)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) return
    
    return docSnap.data()

}

export default getData