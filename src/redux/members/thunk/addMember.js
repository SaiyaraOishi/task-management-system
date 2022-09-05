import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";
import { addMember } from "../actions";
import { v4 as uuid } from "uuid";

const COLLECTION_NAME = "members";

const addMemberToDb = ({name}) => {

    const id = uuid();

    return async (dispatch) => {
        const members = doc(firebaseDb, COLLECTION_NAME, id);
        const response = await setDoc(members,{id: id, name: name});
        // const response = snapshot.docs.map(doc => doc.data());

        dispatch(addMember(response));
    }

}

export default addMemberToDb;