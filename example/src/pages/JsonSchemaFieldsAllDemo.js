import React, { Fragment } from 'react'
import { JsonSchemaFields, getInitialValues, validateValues } from 'formik-helpers';
import BsCard from '../components/BsCard';
import { Formik, Form } from 'formik';

export default function JsonSchemaFieldsAllDemo() {

    const demos = [
        {
            title: 'Text Field',
            fieldsSchema: [
                {
                    label: 'Text Field',
                    type: 'text',
                    name: 'text-field',
                    initialValue: 'hello world',
                }
            ]
        },
        {
            title: 'Email',
            fieldsSchema: [
                {
                    label: 'Email',
                    type: 'email',
                    name: 'email',
                    initialValue: 'abc@abc.com',
                }
            ]
        },
        {
            title: 'Number',
            fieldsSchema: [
                {
                    label: 'Number',
                    type: 'number',
                    name: 'number',
                    initialValue: 15,
                    inputProps: {
                        min: "10",
                        max: "20"
                    }
                }
            ]
        },
        {
            title: "Validation Demo",
            fieldsSchema: [
                {
                    label: 'Email',
                    type: 'email',
                    name: 'valid-email',
                    validation: [
                        ["yup.string"],
                        ["yup.email"],
                        ["yup.required"]
                    ]
                },
                {
                    label: 'Number',
                    type: 'number',
                    name: 'valid-number',
                    validation: [
                        ["yup.number"],
                        ["yup.required"],
                        ["yup.min", 50],
                        ["yup.max", 500],

                    ]
                }
            ]
        }
    ];

    return (
        <div className="container">
            {demos.map((demo, demoIndex) => {
                return <BsCard
                    key={demoIndex}
                    header={demo.title}
                    body={
                        <Fragment>
                            <p><b>JSON Fields Schema</b></p>
                            <pre>
                                {JSON.stringify(demo.fieldsSchema, null, 2)}
                            </pre>
                            <hr />

                            <p><b>Output</b></p>
                            <Formik
                                initialValues={getInitialValues(demo.fieldsSchema)}
                                validate={values => {
                                    let errors = {};
                                    validateValues(demo.fieldsSchema)
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {(formikProps) => (
                                    <Form>

                                        <JsonSchemaFields fieldsSchema={demo.fieldsSchema} formikProps={formikProps} />

                                        <button className="btn btn-sm btn-primary" type="submit" disabled={formikProps.isSubmitting}>
                                            Test Submit
                                        </button>

                                        <hr />
                                        {JSON.stringify(formikProps.values, null, 2)}
                                    </Form>
                                )}
                            </Formik>
                        </Fragment>
                    }
                />
            })}
        </div>
    )
}
