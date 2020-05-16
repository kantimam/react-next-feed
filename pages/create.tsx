import React, { Component } from 'react'
import Layout from '../components/Layout'
/* import Button from '@material-ui/core/Button'; */
import { Typography, Container } from '@material-ui/core';
import CreateRecipeForm from '../components/CreateRecipeForm';


export default class create extends Component {
    onFormSubmit = (formValues: any, action: any) => {
        console.log(formValues)
        //alert(JSON.stringify(formValues))
        console.log(action)
    }
    render() {
        return (
            < Layout title="Create Recipe" >
                <Container>
                    <Typography variant="h4">Hello world</Typography>
                    <CreateRecipeForm
                        onSubmit={this.onFormSubmit}
                    />
                </Container>
            </Layout >
        )
    }
}
