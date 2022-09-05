import { collection, getDocs } from 'firebase/firestore/lite';
import firebaseDb from "../util/firebase";

const COLLECTION_NAME = "tasks";

export default function Data() {

    const getTodos = async () => {
        const tests = collection(firebaseDb, COLLECTION_NAME);
        const snapshot = await getDocs(tests);
        const testsData = snapshot.docs.map(doc => doc.data());
        console.log(testsData);
    }
    getTodos();
    return (
        <>
        
        </>
    )
}