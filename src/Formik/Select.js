import { Field } from "formik";

export default function Select(props) {
  const { name, options, ...rest } = props;
  return (
    <div>
      <Field as="select" id={name} name={name} {...rest}>
      <option select hidden>Please select a value</option>
        {options.map((opt) => {
          console.log(opt);
          return (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          );
        })}
      </Field>
    </div>
  );
}
