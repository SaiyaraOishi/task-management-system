import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "tasks";

const deleteTaskInDb = (id) => {

    return async () => {
        await deleteDoc(doc(firebaseDb, COLLECTION_NAME, id))
    }
}

export default deleteTaskInDb;