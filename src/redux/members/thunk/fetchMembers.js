import firebaseDb from "../../../util/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { getMember } from "../actions";

const COLLECTION_NAME = "members";

const fetchMembers = async (dispatch) => {
    const members = collection(firebaseDb, COLLECTION_NAME);
    const snapshot = await getDocs(members);
    const response = snapshot.docs.map(doc => doc.data());

    dispatch(getMember(response));
}

export default fetchMembers;