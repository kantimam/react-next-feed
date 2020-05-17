import React, { useState } from 'react'
import { Card } from '@material-ui/core'

interface PropTypes {
    name: string,
    onChange: (e: React.ChangeEvent<any>) => void,
    value: string,
    index: number,
    editActive: boolean
}

const RecipeStep = ({ name = "", onChange, value = "", index = 0, editActive = false }: PropTypes) => {
    /* display either a textarea to edit the recipestep or a container displaying the step nicely */
    const [active, setActive] = useState(editActive)

    if (editActive) return <textarea name={name} value={value}></textarea>

    return (
        <Card className="recipeStepCard">
            <div className="stepIndex">
                {index}
            </div>
            <div className="stepEditToggle">
                X
            </div>
            {active ?
                <div className="stepText">
                    {value}
                </div>
                :
                <textarea
                    value={value}
                    onChange={onChange}
                    name={name}
                    cols={20}
                    rows={20}
                >

                </textarea>
            }
        </Card>
    )
}

export default RecipeStep
