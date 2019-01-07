import React from 'react';
import {Card, Button,notification} from "antd";
import './ui.less';

export default class Notice extends React.Component{
    openNotification=(type,place)=>{
        if (place){
            notification.config({
                placement:place
            })
        }
        notification[type]({
            message:'今天真冷',
            description:'放假就好了'
        });
    }
    render() {
        return(
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.openNotification('success','topRight')}>Success</Button>
                    <Button type='primary' onClick={()=>this.openNotification('info','topLeft')}>Info</Button>
                    <Button type='primary' onClick={()=>this.openNotification('error','bottomLeft')}>Error</Button>
                    <Button type='primary' onClick={()=>this.openNotification('warning','bottomRight')}>Warning</Button>
                </Card>
            </div>
        )
    }
}