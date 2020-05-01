import React from 'react';
import { Descriptions,Drawer, Button} from 'antd';
import store from '../redux/store';
import { disappearPinfoForm,appearChangePinfoForm } from '../redux/action';

export default class PinfoForm extends React.Component {

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
      store.dispatch(disappearPinfoForm())
  }

  showChangePinfoModal = () => {
    store.dispatch(appearChangePinfoForm())
    }
  

render() {
return (
    <Drawer title="个人信息" visible={this.state.pinfoVisible} height="250" onClose={this.onClose} placement="bottom">
<Descriptions>
    <Descriptions.Item label="昵称">小学生</Descriptions.Item>
    <Descriptions.Item label="手机">1810000000</Descriptions.Item>
    <Descriptions.Item label="邮箱">532233223@qq.com</Descriptions.Item>
    <Descriptions.Item label="性别">男</Descriptions.Item>
    <Descriptions.Item label="简介">一个帅气的小学生</Descriptions.Item>
    <Descriptions.Item label="目标" >成为一个帅气的大学生</Descriptions.Item>
  </Descriptions>
  <Button type="primary" style={{marginTop:40,marginLeft:1200}} onClick={this.showChangePinfoModal}>修改个人信息</Button>
  </Drawer>
)
}
}