import React, { Component } from 'react'

interface Props {
    render(state: any): React.ReactNode
}



export default class Resource extends Component<Props, any> {
    state = {

    }
    render() {
        return (
            this.props.render(this.state)
        )
    }
}

