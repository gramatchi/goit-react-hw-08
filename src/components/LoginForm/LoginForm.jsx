import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
        </div>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
