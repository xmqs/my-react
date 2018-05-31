import React from "react"

export default class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            miniHeader:false,
        }
    }

    switchHeader(){
        this.setState({miniHeader:!this.state.miniHeader});
    }
    render(){
        //局限 伪类样式不可用 hover等不可用···
        const styleComponentHeder = {
                header:{
                    color: 'blue',
                    backgroundColor:'#e4393c',
                    paddingTop: (this.state.miniHeader)?"20px":"2px"
                }

            };
        return(
            <header style={styleComponentHeder.header} className="planeTitle"
            onClick={this.switchHeader.bind(this)}
            >
                <h1>title</h1>
            </header>
        )
    }
}

