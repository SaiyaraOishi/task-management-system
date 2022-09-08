import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from "../redux/user/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";


export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string().required("*Required"),
        email: Yup.string().required("*Required"),
        password: Yup.string().required("*Required"),
    });
    const onSubmit = (values) => {
        dispatch(addName({name: values.name, email: values.email, password: values.password}));
        navigate("/dashboard");
    };

    return (
        <>
            <div className="flex justify-center mt-8">
                <img src="logo192.png" alt="" />
            </div>
            <div className="mt-2 text-2xl bold text-cyan-700 text-center">Task Management</div>
                <div className="text-center mt-20">
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
                                            className="text-center border border-cyan-700 rounded-md py-2"
                                            control="input"
                                            type="text"
                                            name="name"
                                            placeholder="Enter username"
                                        />
                                         <FormikControl
                                            className="text-center border border-cyan-700 rounded-md py-2"
                                            control="input"
                                            type="text"
                                            name="email"
                                            placeholder="Enter email"
                                        />
                                         <FormikControl
                                            className="text-center border border-cyan-700 rounded-md py-2"
                                            control="input"
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                        />

                                        <button
                                        className="bg-blue-500 mt-28 px-4 py-2 text-white rounded-md"
                                            type="submit"
                                            disabled={!formik.isValid}
                                        >
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