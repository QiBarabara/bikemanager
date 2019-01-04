import React from 'react';
import menuConfig from '../../config/menuConfig';
import './index.less'

import { Menu, Icon } from 'antd';
import {NavLink} from "react-router-dom";

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        const menuTreeNode=this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode:menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if (item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h3>单车管理系统</h3>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}