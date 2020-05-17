import React, { useState } from 'react'
import { TextField, Box } from '@material-ui/core';

interface Props {
    label: string,
    value: string,
    name: string,
    placeholder?: string
    onChange: (e: React.ChangeEvent) => void
    editActive?: boolean,
    children?: any,
    multiline?: boolean
}


const PreviewInput = ({ multiline = false, label, value, name = "", placeholder = "", onChange, editActive = false, children }: Props) => {
    const [active, setActive] = useState(editActive);

    return (
        <Box onClick={() => setActive(true)}>
            {active ?

                <TextField
                    name={name}
                    size="small"
                    placeholder={placeholder}
                    value={value}
                    label={label}
                    variant="outlined"
                    onChange={onChange}
                    onBlur={() => setActive(false)}
                    multiline={multiline}
                    margin="normal"
                />
                :
                children

            }

        </Box>

    )
}

export default PreviewInput
