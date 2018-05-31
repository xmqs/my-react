import React from "react"
import BodyChild from "./bodychild"
import PropTypes from 'prop-types';
import ReactMixin from "react-mixin"
import MixinLog from "./mixin";

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



const deafultprops = {
    plane:"under",
    userid:"test"
}

export default class BodyIndex extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

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
        let html = "immmm&nbsp;isguhu";
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
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