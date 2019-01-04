import React from 'react';
import './index.less'

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className='home-wrap'>
                欢迎来到单车管理系统
            </div>
        )
    }
}