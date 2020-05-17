import React, { Component } from 'react'
import { Field, Form, Formik, FormikHelpers, FieldArray } from 'formik';
import { Button, TextField } from '@material-ui/core';
import RecipeStep from './RecipeStepFormik';

interface FormFieldTypes {
    name: string,
    description: string,
    ingredients: string,
    steps: string[]
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
                        ingredients: "",
                        steps: [""]
                    }}
                    onSubmit={this.props.onSubmit}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Field
                                label="name"
                                variant="outlined"
                                component={TextField}
                                fullWidth
                                className="recipeInput"
                                name="name"
                            />

                            <Field
                                label="description"
                                variant="outlined"
                                multiline
                                fullWidth
                                component={TextField}
                                className="recipeInput"
                                name="description"
                            />

                            <Field
                                label="ingredients"
                                variant="outlined"
                                multiline
                                fullWidth
                                component={TextField}
                                className="recipeInput"
                                placeholder="add list of ingredients seperated by new line"
                                name="ingredients"
                            />



                            {/* add steps one by one */}
                            <FieldArray name="steps"
                                render={({ push, remove }) => (
                                    <div className="formAddSteps">
                                        {(values.steps && values.steps.length > 0) &&
                                            values.steps.map((item, index) => (
                                                <RecipeStep
                                                    key={index}
                                                    index={index}
                                                    name={`steps[${index}]`}
                                                    value={item}
                                                    onChange={handleChange}
                                                    deleteStep={remove}
                                                    editActive={values.steps.length - 1 === index} // the last field is active by default
                                                />
                                            ))
                                        }

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            onClick={() => push("")}>

                                            add step
                                        </Button>
                                    </div>
                                )}
                            />

                            <Button
                                color="primary"
                                variant="contained"
                                type="submit">
                                Create
                            </Button>
                        </Form>
                    )}
                </Formik>

            </div >
        )
    }
}


