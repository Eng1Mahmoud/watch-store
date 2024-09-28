import { Formik, Form } from "formik";
import { ReactNode } from "react";
import * as yup from "yup";
interface BaseFormProps {
  initialValues: any;
  validationSchema: yup.ObjectSchema<any>;
  onSubmit: any;
  children: ReactNode;
}
const BaseForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: BaseFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>{children}</Form>
    </Formik>
  );
};
export default BaseForm;
