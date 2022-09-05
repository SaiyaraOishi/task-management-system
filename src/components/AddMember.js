import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addMember } from "../redux/members/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import addMemberToDb from "../redux/members/thunk/addMember";

export default function AddMember() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    dispatch(addMemberToDb({ name: values.name }));
    navigate("/member");
  };

  return (
    <>
      <Navbar />
      <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">Add Member</div>
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
                    name="name"
                    placeholder="Name of member"
                  />
                </div>
                <div className="">
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