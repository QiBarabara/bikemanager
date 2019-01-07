import React from 'react';
import {Card,Button,Spin,Icon,Alert} from "antd";
import './ui.less';

export default class Loading extends React.Component{
    render() {
        const icon=<Icon type='loading' style={{fontSize:24}}/>
        return(
            <div>
                <Card title='Spin using' className='card-wrap'>
                    <Spin indicator={icon} style={{margin:'0 10px'}}/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Icon type="sync" spin />
                </Card>
                <Card title='内容遮罩' className='card-wrap'>
                    <Spin>
                        <Alert
                            message='React'
                            description='欢迎来到单车管理系统'
                            type='warning'
                        />
                    </Spin>
                    <Spin tip='加载中'>
                        <Alert
                            message='React'
                            description='欢迎来到单车管理系统'
                            type='warning'
                        />
                    </Spin>
                </Card>

            </div>
        )
    }
}