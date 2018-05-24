import React from "react"

export default class BodyChild extends React.Component{
    render() {
        return (
            <div>
                飞机航班Number<input type="text" onChange={this.props.handleChildrenChange}/>
            </div>
        )
    }
}