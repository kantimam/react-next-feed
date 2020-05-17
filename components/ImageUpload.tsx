import React from 'react'
import { Box } from '@material-ui/core'

interface Props {
    imageFile?: string | null | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    removeImage?: () => void
}

const ImageUpload = ({ imageFile, onChange, removeImage }: Props) => {
    if (imageFile) return (
        <Box>
            <div
                onClick={removeImage}
            >
                X
            </div>
            <img src={imageFile} alt="" />

        </Box>
    )

    return (
        <Box>
            <input
                type="file"
                className="recipeImageInput"
                onChange={onChange}
                multiple={false}
            />
        </Box>
    )
}

export default ImageUpload
