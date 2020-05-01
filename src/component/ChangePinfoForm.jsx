import React from 'react';
import { Modal, Button, Form, Checkbox, Input,Select} from 'antd';
import store from '../redux/store';
import { disappearChangePinfoForm } from '../redux/action';

const { Option }=Select;
const { TextArea } = Input;
export default class ChangePinfoForm extends React.Component {

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
      store.dispatch(disappearChangePinfoForm())
  }

render() {
return (
<Modal title="修改信息" visible={this.state.changepinfoVisible} onOk={this.onClose} okText="保存" cancelText="取消"
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
        <Form.Item label="邮箱" name="mail"  rules={[ { required: true }, ]}>
            <Input  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="手机" name="phoneNumber"  style={{marginLeft:10}} rules={[ { required: false }, ]}>
            <Input  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="目标" name="goal"   style={{marginLeft:10}} rules={[ { required: false}, ]}>
            <Input  style={{width:300}}/>
        </Form.Item>
        <Form.Item label="简介" name="introduction"  style={{marginLeft:10}} rules={[ { required: false}, ]}>
             <TextArea rows={5} placeholder="简单介绍一下自己吧😊"   style={{width:300}}/>
        </Form.Item>
    </Form>
</Modal>
)
}
}