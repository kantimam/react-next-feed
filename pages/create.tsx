import React, { Component } from 'react'
import Layout from '../components/Layout'
/* import Button from '@material-ui/core/Button'; */
import { Typography, Container } from '@material-ui/core';
import CreateRecipeForm from '../components/CreateRecipeForm';


export default class create extends Component {

    render() {
        return (
            < Layout title="Create Recipe" >
                <Container>
                    <Typography variant="h4">create recipe</Typography>
                    <CreateRecipeForm />
                </Container>
            </Layout >
        )
    }
}
