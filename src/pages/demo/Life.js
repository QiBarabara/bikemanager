import React from 'react';
import Child from './Child';
import './index.less';
import {Button} from "antd";
import {Avatar} from 'antd';
class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleTest(){
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <p className='a'>react生命周期介绍</p>
                <button onClick={this.handleAdd}>点击一下</button>
                <button onClick={this.handleTest.bind(this)}>点击一下test</button>
                <Button type="primary" onClick={this.handleAdd}>antd</Button>
                <Avatar shape="square" icon="user" />
                <p>{this.state.count}</p>
                <Child name={this.state.count}/>
            </div>
        )
    }
}

export default Life