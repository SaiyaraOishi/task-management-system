import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../redux/user/actions";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validate: values => {
            let errors = {};
            if(!values.name){
                errors.name="*Name is required";
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addName(values.name));
            navigate("/dashboard");
        }
    });

    return (
        <>
            <div className="flex justify-center mt-8">
                <img src="logo192.png" alt="" />
            </div>
            <div className="mt-2 text-2xl bold text-cyan-700 text-center">Task Management</div>
            <form onSubmit={formik.handleSubmit}>
                <div className="text-center mt-20">
                    <input className='text-center border border-cyan-700 rounded-md py-2' type="text" placeholder="Your name" name="name" id="name" value={formik.name} onChange={formik.handleChange} />
                    {formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : null}
                </div>
                <div className="mt-28 text-center ">
                    <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md">Submit</button>
                </div>
            </form>
        </>
    )
}