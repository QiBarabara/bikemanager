import React from 'react';

export default class Child extends React.Component {
    constructor(props){
        super(props);
    };
    componentWillMount() {
        console.log('Will Mount')
    }
    componentDidMount() {
        console.log('Did Mount')
    }
    componentWillReceiveProps(newProps) {//接收父组件的参数
        console.log('Will Props'+newProps.name)
    }
    shouldComponentUpdate(newProps) {//调用组件时会更时的api方法
        console.log('should Update');
        return true;//默认是true，false的话后面的生命周期就不会进行了
    }
    componentWillUpdate(newProps) {
        console.log('will Update');
    }

    render() {
        return (
            <div>子组件的生命周期:{this.props.name}</div>
        )
    }
}