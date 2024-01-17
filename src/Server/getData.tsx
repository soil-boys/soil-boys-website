import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase.tsx'

async function getData(collection: string = "clicks", document: string) {

    if (!document) return

    const docRef = doc(db, collection, document)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) return
    
    return docSnap.data()

}

export default getData