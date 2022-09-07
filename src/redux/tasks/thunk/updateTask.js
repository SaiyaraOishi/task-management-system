import firebaseDb from "../../../util/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";
import { updateMemberName, updateTask } from "../actions";

const COLLECTION_NAME = "tasks";

const updateTaskToDb = (id, { title, detail, member }) => {

    return async (dispatch) => {
        const tasks = doc(firebaseDb, COLLECTION_NAME, id);
        const response = await updateDoc(tasks, { id: id, title: title, detail: detail, member: member });

        dispatch(updateTask(response));
    }

}

export const updateMemberNameInDb = (id, { oldName, newName }) => {
    return async (dispatch) => {
        const tasks = doc(firebaseDb, COLLECTION_NAME, id);
        const response = await updateDoc(tasks, {...tasks, member: newName});

        dispatch(updateMemberName(response));
    }
}

export default updateTaskToDb;