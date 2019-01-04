import React from 'react';
import {Card,Button} from "antd";
import '../ui.less'

export default class Buttons extends React.Component{
    constructor(props) {
        super(props);
    }
    state={
        loading: true,
        word:'关闭',
    }
    handleCloseLoading=()=>{
        let {loading}=this.state;
        this.setState({
            loading:!loading
        })
        if (this.state.loading==true){
            this.setState({word:'提交'})
            console.log(this.state.word)
        }
        else if(this.state.loading==false){
            this.setState({word:'关闭'})
            console.log(this.state.word)
        }
    }
    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>保存</Button>
                    <Button>保存</Button>
                    <Button type='dashed'>保存</Button>
                    <Button type='danger'>保存</Button>
                    <Button disabled>保存</Button>
                </Card>
                <Card title='图形按钮'>
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button type='primary' shape='circle' loading={this.state.loading}></Button>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>{this.state.word}</Button>

                </Card>
            </div>
        );
    }
}