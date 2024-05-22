import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from "nanoid";
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
    const initialValues = {
        id: '',
        name: '',
        number: '',
    };
    const contactFormaSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(12, "Too Long!").required("Required"),
    })

    const fieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd(
            {
                id: nanoid(),
                name: values.name,
                number: values.number
            }
        );
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactFormaSchema}
        >
            <Form>
                <label htmlFor={`${fieldId}-name`}>Name</label>
                <Field
                    className={css.field}
                    type="text"
                    name="name"
                    id={`${fieldId}-name`}
                />
                <ErrorMessage className={css.error} name="name" component="span" />
                <label htmlFor={`${fieldId}-number`}>Number</label>
                <Field
                    className={css.field}
                    type="text"
                    name="number"
                    id={`${fieldId}-number`}
                />
                <ErrorMessage className={css.error} name="number" component="span" />
                <button className={css.btn} type="submit">Add contact</button>
            </Form>

        </Formik>
    )

}