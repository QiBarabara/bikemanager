import React from 'react';
import {Card,Button,Form,Input,Checkbox,Radio,Switch,Select,DatePicker,TimePicker,Upload,Icon,message,InputNumber} from "antd";
const FormItem=Form.Item;
const RadioGroup=Radio.Group;
const Option = Select.Option;

class Register extends React.Component{
    onChange=(value)=> {
        console.log('changed', value);
    }
    render() {
        const {getFieldDecorator}=this.props.form;//封装表单
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        return(
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
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
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('pwd',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:'密码不能为空'
                                    }],
                                })(
                                    <Input prefix={<Icon type="lock" />} placeholder='请输入密码' type='password'/>
                                )
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                    rules:[{
                                        required:true,
                                        message:'必选'
                                    }],
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:18,
                                    rules:[{
                                        required:true,
                                        message:'必选'
                                    }],
                                })(
                                    <InputNumber min={1} max={99} onChange={this.onChange} />
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                    <Select mode='multiple'>
                                        <Option value='0'>咸鱼一条</Option>
                                        <Option value='1'>风流才子</Option>
                                        <Option value='2'>满腹经纶</Option>
                                        <Option value='3'>一个傻子</Option>
                                        <Option value='4'>单身狗</Option>
                                        <Option value='5'>离异狗</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);