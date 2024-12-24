
import { getDocs, collection, query, where,getDoc,doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const obtainProducts = (category) =>{
    const pCollection = category ? query(collection(db, "listProducts"), where("category", "==", category))
    : collection(db, "listProducts")

return getDocs(pCollection)
    .then(querySnapshot => {
        const productUpdated = querySnapshot.docs.map(doc => {
            const getFields = doc.data()
            return {
                id: doc.id,
                ...getFields
            }
        })

        return productUpdated

    }, err => console.error(err))

    .catch(error =>{
        return error  
    } )

}


export const obtainById = (id)=>{
    const document = doc(db, "listProducts", id)
   return  getDoc(document)
        .then(resolve => {
            const docFields = resolve.data()
            const documentUpdated = {
                id: resolve.id, ...docFields
            }
            return documentUpdated
        })
        .catch(err=> console.warn(err))
}