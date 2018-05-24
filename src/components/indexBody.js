import React from "react"
import BodyChild from "./bodychild"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import ReactMixin from "react-mixin"
import MixinLog from "./mixin";

const deafultprops = {
    plane:"under",
    userid:"test"
}

export default class BodyIndex extends React.Component {

    componentWillMount() {
        console.log("line5");
    }

    componentDidMount() {
        console.log("component did Mount");
    }

    constructor() {
        super();
        this.state = {
            plane: '中国航空公司',
            planeNumber:'munber'
        };
    }
    changePlaneInfo(){
        this.setState({plane:'Muijnuu'});
        //var mysubmit = document.getElementById("myplane");
        //ReactDOM.findDOMNode(mysubmit).style.color = 'red';
        this.refs.submit11.style.color = 'green';

        MixinLog.log();
    }

    handleChildrenChange(event){
        this.setState({plane:event.target.value});
    }




    render() {
        //render调用异步会重新render 不能再render中写this.setState
        /*setTimeout(() => {
                this.setState({plane: 'planeComponent'})
            }, 4000)*/

        let userName = "www";
        let markButton = "";
        let html = "immmm&nbsp;isguhu";
        return (
            <div>
                <span>body</span>
                <p>{userName === "" ? 'userunlogin' : userName + 'userlogin'}</p>
                <p>
                <button type="button" value="button" onClick={this.changePlaneInfo.bind(this,200)}>trst</button>
                <input type="button" value="button" onClick={this.changePlaneInfo.bind(this)} value="test"/>
                </p>
                <p>{html}</p>
                <BodyChild handleChildrenChange={this.handleChildrenChange.bind(this)} {...this.props}/>
                <p dangerouslySetInnerHTML={{__html: html}}></p>
                <p>{this.props.userid}</p>
                <p>{this.state.plane}</p>
                <p id='myplane' ref="submit11">2134</p>
            </div>
        )
    }
}
//传值类型 https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
BodyIndex.propTypes = {
    userid:PropTypes.number.isRequired,
    //userid:PropTypes.number,
}
//默认prop值
BodyIndex.defaultProps = deafultprops;

//mixin
ReactMixin(BodyIndex.prototype , MixinLog);