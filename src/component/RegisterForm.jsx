import React from 'react';
import { Modal, Button, Form, Checkbox, Input,Select} from 'antd';
import store from '../redux/store';
import { disappearRegisterForm } from '../redux/action';

const { Option }=Select;
const { TextArea } = Input;
export default class RegisterForm extends React.Component {

constructor(props) {
  super(props)
  this.state = store.getState();
  this.storeChange = this.storeChange.bind(this)
  store.subscribe(this.storeChange)
  }
  
  storeChange(){
    this.setState(store.getState())
  }

  onClose(){
      store.dispatch(disappearRegisterForm())
  }

render() {
return (
<Modal title="注册" visible={this.state.registerVisible} onOk={this.onClose} okText="注册" cancelText="取消"
    onCancel={this.onClose}>
    <Form style={{ marginLeft: 70 }}>
    <Form.Item label="昵称" name="nickname" rules={[ { required: true, message: '请输入您的昵称!' ,
            }, ]}>
            <Input  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="性别" name="gender" rules={[ { required: true, message: '请输入您的性别!' ,
            }, ]}>
           <Select defaultValue="male"  style={{width:300}}>
            <Option value="male">男</Option>
            <Option value="female">女</Option>
        </Select>
        </Form.Item>
        <Form.Item label="邮箱" name="mail"  rules={[ { required: true, message: '请输入您的邮箱!' ,
            }, ]}>
            <Input  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[ { required: true, message: '请输入您的密码!' ,
            }, ]}>
            <Input.Password  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="确认密码" name="confirmPassword" style={{marginLeft:-28}} rules={[ { required: true, message: '请重复输入密码以确认!' ,
            }, ]}>
            <Input.Password  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="个人简介" name="introduction"  style={{marginLeft:-18}} rules={[ { required: false}, ]}>
             <TextArea rows={5} placeholder="简单介绍一下自己吧😊"   style={{width:300}}/>
        </Form.Item>
    </Form>
</Modal>
)
}
}