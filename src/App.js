import React, { Component } from 'react';
import ComponentHeader from "./components/header"
import ComponentFooter from "./components/footer"
import BodyIndex from "./components/indexBody"

import 'antd/dist/antd.css'

class App extends Component {
    componentWillMount(){
        console.log("8-index")
    }

    componentDidMount(){
        console.log("13-inedx")
    }



  render() {
  var component;
  if (true) {
      component = <ComponentHeader/>;
  }else{
      component = <ComponentHeader/>;
  }

    return (

        <div>
            {component}
            <BodyIndex userid={15905600684}/>
            <ComponentFooter/>
        </div>
    );
  }
}

export default App;
