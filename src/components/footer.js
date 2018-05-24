import React from "react"
var footerCss = require('./../css/minifooter.css')
export default class ComponentFooter extends React.Component{
    render(){
        console.log(footerCss);
        return(
            <div>
                <p className = {footerCss.planeFooter}>
                    footer
                </p>
            </div>
        )
    }
}