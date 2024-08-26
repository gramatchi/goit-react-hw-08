import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from './LoginForm.module.css'; 
import { Link } from "react-router-dom";


const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.formGroup}>
          <label className={css.label}>
            Email:
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.errorMessage} />
          </label>
        </div>

        <div className={css.formGroup}>
          <label className={css.label}>
            Password:
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.errorMessage} />
          </label>
        </div>
        <div>
            <Link to="/register">You did not have account? Register!</Link>
          </div>

        <button type="submit" className={css.submitButton}>Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
