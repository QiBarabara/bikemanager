import React from 'react';
import {Card,Row,Col,Modal} from "antd";

export default class Gallery extends React.Component{
    state={
        visible:false
    }
    openGallery=(imgSrc,imgTitle)=>{
        console.log(imgSrc,imgTitle)
        this.setState({
            currentImg:"/gallery/"+imgSrc,
            visible:true,
            title:imgTitle
        })
    }
    render() {
        const imgs=[
            [
                {title:'第一个',description:'描述',src:'1.png'},
                {title:'第二个',description:'描述',src:'2.png'},
                {title:'第三个',description:'描述',src:'3.png'},
                {title:'第四个',description:'描述',src:'4.png'},
                {title:'第五个',description:'描述',src:'5.png'},
                {title:'第六个',description:'描述',src:'6.png'},
            ],
            [
                {title:'第七个',description:'描述',src:'7.png'},
                {title:'第八个',description:'描述',src:'8.png'},
                {title:'第九个',description:'描述',src:'9.png'},
                {title:'第十个',description:'描述',src:'10.png'},
                {title:'第十一个',description:'描述',src:'11.png'},
                {title:'第十二个',description:'描述',src:'12.png'},
            ],
            [
                {title:'第十三个',description:'描述',src:'13.png'},
                {title:'第十四个',description:'描述',src:'14.png'},
                {title:'第十五个',description:'描述',src:'15.png'},
                {title:'第十六个',description:'描述',src:'16.png'},
                {title:'第十七个',description:'描述',src:'17.png'},
                {title:'第十八个',description:'描述',src:'18.png'},
            ],
            [
                {title:'第十九个',description:'描述',src:'19.png'},
                {title:'第二十个',description:'描述',src:'20.png'},
                {title:'第二十一个',description:'描述',src:'21.png'},
                {title:'第二十二个',description:'描述',src:'22.png'},
                {title:'第二十三个',description:'描述',src:'23.png'},
                {title:'第二十四个',description:'描述',src:'24.png'},
            ],
        ];
        //第一个循环遍历有多少行，第二个循环遍历一行有多少个
        const imgList=imgs.map((list)=>
            list.map((item)=>
                    <Card cover={<img src={"/gallery/"+item.src} onClick={()=>this.openGallery(item.src,item.title)}/>} style={{marginTop:10}}>
                       <Card.Meta title={item.title} description={item.description}/>
                    </Card>
            )
        )
        return(
            <div className='card-wrap'>
                <Row gutter={15}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                    <Modal
                        title={this.state.title}
                        style={{width:'200px',height:'300px'}}
                        visible={this.state.visible}
                        onCancel={()=>{
                            this.setState({
                                visible:false
                            })
                        }}
                        footer={null}
                    >
                        <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
                    </Modal>
                </Row>
            </div>
        )
    }
}