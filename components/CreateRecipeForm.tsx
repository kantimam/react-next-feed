import React, { Component } from 'react'
import { Field, Form, Formik, FormikHelpers, FieldArray } from 'formik';
import { Button, TextField } from '@material-ui/core';

interface FormFieldTypes {
    name: string,
    description: string,
    steps: { id: number, step: string }[]
}

interface FormPropTypes {
    onSubmit: (values: FormFieldTypes, action: FormikHelpers<FormFieldTypes>) => void | Promise<any>
}

export default class CreateRecipeForm extends Component<FormPropTypes, {}> {
    render() {
        return (
            <div className="createRecipeForm">
                <Formik
                    initialValues={{
                        name: "",
                        description: "",
                        steps: [{ id: 0, step: "" }]
                    }}
                    onSubmit={this.props.onSubmit}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Field
                                label="name"
                                variant="outlined"
                                component={TextField}
                                name="name" />

                            <Field
                                label="description"
                                variant="outlined"
                                component={TextField}
                                name="description" />

                            {/* add steps one by one */}
                            <FieldArray name="steps"
                                render={({ push }) => (
                                    <div className="formAddSteps">
                                        {(values.steps && values.steps.length > 0) &&
                                            values.steps.map((_item, index) => (
                                                <div key={index}>
                                                    <TextField
                                                        label="steps"
                                                        variant="outlined"
                                                        name={`steps[${index}].step`}
                                                        onChange={handleChange}
                                                    />
                                                    {console.log(values.steps[index])}
                                                </div>
                                            ))
                                        }
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            onClick={() => push({ id: Date.now(), step: "" })}>

                                            add
                                        </Button>
                                    </div>
                                )}
                            />

                            <Button
                                color="primary"
                                variant="contained"
                                type="submit">
                                SUBMIT
                        </Button>
                        </Form>
                    )}
                </Formik>

            </div >
        )
    }
}


/* const FormikTextField = (props: FieldConfig) => {
    return <Field {...props} component={(formikProps: FieldConfig) => <TextField {...formikProps} variant="outlined" />} />
} */
