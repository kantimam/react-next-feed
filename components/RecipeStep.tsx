import React, { useState, memo, useRef } from 'react'
import { Card, Button, TextField, Typography } from '@material-ui/core'

interface PropTypes {
    name: string,
    onChange: (e: React.ChangeEvent<any>) => void,
    value?: string,
    index?: number,
    editActive?: boolean,
    deleteStep: <T>(index: number) => T | undefined
}

const RecipeStep = ({ name = "", onChange, value = "", index = 0, editActive = false, deleteStep }: PropTypes) => {
    /* display either a textarea to edit the recipestep or a container displaying the step nicely */
    const [active, setActive] = useState(editActive);
    const [inputVal, setVal] = useState(value);
    const debounceRef: any = useRef(null);

    /* formik seems to be fcking annoying with its fieldArray so just update it once you finish typing */
    const handleChange = (e: React.ChangeEvent<any>) => {
        e.persist(); // keep the event around to pass it a second time
        setVal(e.target.value)
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => onChange(e), 200);
    }


    return (
        <Card className="recipeStepCard">
            <Typography className="stepIndex">
                Recipe step {index + 1}
            </Typography>
            <Button
                onClick={() => setActive(!active)}
                variant="contained"
                color="secondary"
                className="editButton"
            >
                {active ? "done" : "edit"}
            </Button>
            <Button
                onClick={() => deleteStep(index)}
                variant="contained"
                color="secondary"
                className="deleteButton"
            >
                delete
            </Button>

            {active ?
                <TextField
                    name={name}
                    multiline
                    variant="outlined"
                    className="stepInput"
                    onChange={handleChange}
                    value={inputVal}
                >

                </TextField>
                :
                <div className="stepText">
                    {value}
                </div>

            }
        </Card>
    )
}

export default memo(RecipeStep)
