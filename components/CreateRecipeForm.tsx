import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core';
import PreviewInput from './PreviewInput';
import ImageUpload from './ImageUpload';





export default class CreateRecipeForm extends Component {
    state = {
        name: "asd",
        imageFiles: null,
        image: null
    }

    onInputChange = (e: React.ChangeEvent) => {
        this.setState({ [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value })
    }

    onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const image = URL.createObjectURL(files[0])
        this.setState({ imageFile: files, image: image })
    }

    render() {
        return (
            <form className="createRecipeForm">
                <PreviewInput
                    name="name"
                    label="name"
                    onChange={this.onInputChange}
                    value={this.state.name}
                >
                    <Typography variant="h3">{this.state.name}</Typography>
                </PreviewInput>

                <PreviewInput
                    name="description"
                    label="description"
                    onChange={this.onInputChange}
                    value={this.state.name}
                >
                    <Typography variant="h5">{this.state.name}</Typography>
                </PreviewInput>


                <ImageUpload
                    onChange={this.onFileChange}
                    removeImage={() => this.setState({ image: null })}
                    imageFile={this.state.image}
                />

                <Button
                    variant="contained"

                >
                    create
                </Button>
            </form >
        )
    }
}


