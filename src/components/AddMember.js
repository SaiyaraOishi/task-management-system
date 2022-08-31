import { useFormik } from "formik";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMember } from "../redux/members/actions";

export default function AddMember() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validate: values => {
            let errors = {};
            if (!values.name) {
                errors.name = "*Name is required";
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addMember({ name: values.name }));
            navigate("/member");
        }
    });

    const onCancel = () => {
        navigate("/member");
    }

    return (
        <>
            <Navbar />
            <div className="ml-8">
                <div className="mt-4 text-2xl font-bold">Add Member</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="">
                        <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Name" name="name" id="name" value={formik.name} onChange={formik.handleChange} />
                        {formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : null}
                    </div>
                    <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md">Submit</button>
                </form>
            </div>
        </>
    )
}