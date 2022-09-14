import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../Formik/FormikControl";
import addTaskToAPI from "../redux/tasks/thunk/addTask";



export default function AddTask() {

    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.memberlist);
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);

    const dropdownOptions = members.filter((member, key) => {
        const obj = {
            key: { key },
            value: { member },
        };
        return obj;
    });

    const initialValues = {
        title: "",
        description: "",
        member: ""
    }
    const validationSchema = Yup.object({
        title: Yup.string().required("*Title is required")
    })
    const onSubmit = async (values) => {
        // dispatch(addTaskToDb({ title: values.title, detail: values.detail, member: values.member }));
        // navigate("/task");
        await addTaskToAPI( navigate, values.title, values.description, values.member, token);
    }

    return (
        <>
            <Navbar />
            <div className="ml-8">
                <div className="mt-4 text-2xl font-bold">Add Task</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => {
                        return (
                            <Form>
                                <div>
                                    <FormikControl
                                        className="text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96"
                                        control="input"
                                        type="text"
                                        name="title"
                                        placeholder="Enter title"
                                    />
                                    <FormikControl
                                        className="text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96"
                                        control="input"
                                        type="text"
                                        name="description"
                                        placeholder="Enter detail"
                                    />
                                    <div>Assigned to:</div>
                                    <FormikControl
                                        control="select"
                                        type="text"
                                        name="member"
                                        options={dropdownOptions}
                                    />
                                    <button
                                        className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md"
                                        type="button"
                                        onClick={() => navigate("/member")}
                                    >
                                        Cancel
                                    </button>

                                    <button className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </Form>

                        );

                    }}
                </Formik>
            </div>
        </>
    )
}