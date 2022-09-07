import firebaseDb from "../../../util/firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

const COLLECTION_NAME = "members";

const deleteMemberInDb = (id) => {

    return async () => {
        await deleteDoc(doc(firebaseDb, COLLECTION_NAME, id))
    }
}

export default deleteMemberInDb;