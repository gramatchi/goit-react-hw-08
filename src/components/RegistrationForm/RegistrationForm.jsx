import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter email please").required("Required"),
    password: Yup.string().min(7, "Min 7 characters").required("Required"),
  });
  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.formGroup}>
            <label className={css.label}>
              Name:
              <Field type="text" name="name" className={css.input} />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </label>
          </div>

          <div className={css.formGroup}>
            <label className={css.label}>
              Email:
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </label>
          </div>

          <div className={css.formGroup}>
            <label className={css.label}>
              Password:
              <Field type="password" name="password" className={css.input} />
              <ErrorMessage
                name="password"
                component="div"
                className={css.errorMessage}
              />
            </label>
          </div>
          <div>
            <Link to="/login">You already have account? Log in!</Link>
          </div>

          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
