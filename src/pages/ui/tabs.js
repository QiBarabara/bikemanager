import React from 'react';
import './ui.less';
import {Tabs,Card,message,Icon} from "antd";
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component{
    newTabIndex=0;
    handleCallback=(key)=>{
        message.info('您选择了一个页签：'+key);
    }
    onChange=(activeKey)=>{
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab ${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    componentWillMount() {
        const panes=[
            {
                title:'tab1',
                content:'单车',
                key:'1'
            },
            {
                title:'tab2',
                content:'管理',
                key:'2'
            },
            {
                title:'tab3',
                content:'系统',
                key:'3'
            },
        ];
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }
    render() {
        return(
            <div>
                <Card title='tab页签' className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">单车</TabPane>
                        <TabPane tab="Tab 2" key="2">管理</TabPane>
                        <TabPane tab="Tab 3" key="3">系统</TabPane>
                    </Tabs>
                </Card>
                <Card title='带图的tab页签' className='card-wrap'>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                            单车
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                            系统
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='新增删除tab页签' className='card-wrap'>
                    <Tabs onChange={this.onChange}
                          activeKey={this.state.activeKey}
                          defaultActiveKey="1"
                          onChange={this.handleCallback}
                          type='editable-card'
                          onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel)=>{
                                return <TabPane tab={panel.title} key={panel.key}/>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}