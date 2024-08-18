import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ handleAddContact }) => {
  const initialValues = { name: "", number: "" };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form>
          <label className={css.label}>
            Name
            <Field name="name" placeholder="Enter name" className={css.field} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Number
            <Field
              name="number"
              placeholder="Enter phone number"
              className={css.field}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>

          <button type="submit" className={css.submitButton}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
