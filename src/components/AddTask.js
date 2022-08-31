import { useFormik } from "formik";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/tasks/actions";

export default function AddTask() {

    const dispatch = useDispatch();
    const members = useSelector((state) => state.members.memberlist);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: "",
            detail: "",
            member: ""
        },
        validate: values => {
            let errors = {};
            if (!values.title) {
                errors.title = "*Title is required";
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addTask({ title: values.title, detail: values.detail, member: values.member }));
            navigate("/task");
        }
    });

    const onCancel = () => {
        navigate("/task");
    }

    return (
        <>
            <Navbar />
            <div className="ml-8">
                <div className="mt-4 text-2xl font-bold">Add Task</div>
                <form onSubmit={formik.handleSubmit}>
                    <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Task name" name="title" id="title" value={formik.title} onChange={formik.handleChange} />
                    {formik.errors.title ? <div className="text-red-600">{formik.errors.title}</div> : null}
                    <div>
                        <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Task details" name="detail" id="detail" value={formik.detail} onChange={formik.handleChange} />
                    </div>
                    <div>Assigned to:</div>
                    <div>
                        <select className="border border-cyan-700 rounded-md" name="member" id="member" value={formik.member} onChange={formik.handleChange}>
                            <option select hidden>Please select a value</option>
                            {members.map((member, key) => (
                                <option name="member" value={member.name} key={key}>{member.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md">Submit</button>
                </form>
            </div>
        </>
    )
}