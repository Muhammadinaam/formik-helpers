import React, { Fragment } from 'react'
import { JsonSchemaFields, getInitialValues } from 'formik-helpers';
import BsCard from '../components/BsCard';
import { Formik, Form } from 'formik';

export default function JsonSchemaFieldsAllDemo() {

    const demos = [
        {
            title: 'text field',
            fieldsSchema: [
                {
                    label: 'text field',
                    type: 'text',
                    name: 'text-field',
                    initialValue: 'hello world',
                }
            ]
        },
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
                                    const errors = {};
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
