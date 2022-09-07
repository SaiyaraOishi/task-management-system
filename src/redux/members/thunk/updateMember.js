import firebaseDb from "../../../util/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";
import { updateMember } from "../actions";

const COLLECTION_NAME = "members";

const updateMemberToDb = (id, {name}) => {

    return async (dispatch) => {
        const members = doc(firebaseDb, COLLECTION_NAME, id);
        const response = await updateDoc(members,{id: id, name: name});

        dispatch(updateMember(response));
    }

}

export default updateMemberToDb;