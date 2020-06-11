import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from "./actions";
import "@/style/demo.scss";

@connect(state => state.DemoReducer, {getUserInfo})
class Demo extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserInfo();
    }
    handleClick() {
        console.log(1);
    }
    render() {
        const { userInfo } = this.props;
        return (
            <div className="demo" onClick={() => {this.handleClick();}}>
                姓名：{userInfo.name}<br />
                年龄：{userInfo.age}
            </div>
        );
    }
}

Demo.propTypes = {
    userInfo: PropTypes.object,
    getUserInfo: PropTypes.func
};

export default Demo;