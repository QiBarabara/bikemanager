import React from 'react';
import {Card,Form,Input,Button,message,Icon,Checkbox} from "antd";

const FormItem=Form.Item;

class FormLogin extends React.Component{
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if (!err){
                message.success(`欢迎${userInfo.username}登录，登录密码为${userInfo.password}`)
            }
        })
    }
    render() {
        const {getFieldDecorator}=this.props.form;//封装表单
        return(
            <div>
                <Card title='登陆行内表单'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input prefix={<Icon type="user" />} placeholder='请输入用户名'/>
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="unlock" />} placeholder='请输入密码' type='password'/>
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='登陆水平表单' style={{marginTop:'10px',width:'300px'}}>
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:'用户名不能为空'
                                    },{
                                        min:5,
                                        message:'长度不在范围内'
                                    },{
                                        pattern:new RegExp('^\\w+$','g'),
                                        message:'只能是字母或数字'
                                    }],
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder='请输入用户名'/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules:[]
                                })(
                                    <Input prefix={<Icon type="unlock" />} placeholder='请输入密码' type='password'/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true,
                                    rules:[]
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a style={{float:'left'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);