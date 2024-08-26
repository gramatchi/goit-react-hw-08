import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter email please").required("Required"),
    password: Yup.string().min(7, "Min 7 characters").required("Required"),
  });

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className={css.formGroup}>
            <label className={css.label}>
              Usermame:
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

          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
