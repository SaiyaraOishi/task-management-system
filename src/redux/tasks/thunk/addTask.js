import firebaseDb from "../../../util/firebase";
import { doc, setDoc } from "firebase/firestore/lite";
import { addTask } from "../actions";
import { v4 as uuid } from "uuid";

const COLLECTION_NAME = "tasks";

const addTaskToDb = ({title, detail, member}) => {

    const id = uuid();

    return async (dispatch) => {
        const tasks = doc(firebaseDb, COLLECTION_NAME, id);
        const response = await setDoc(tasks,{id: id, title: title, detail: detail, member: member});
        // const response = snapshot.docs.map(doc => doc.data());

        dispatch(addTask(response));
    }

}

export default addTaskToDb;