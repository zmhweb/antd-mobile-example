import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Toast } from 'antd-mobile-v2';
import { Button } from 'antd-mobile';


import 'antd-mobile-v2/dist/antd-mobile.less';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>测试</div>
        );
    }
}


export default withRouter(App);
