import React from 'react';
import { Modal, Button, Form, Checkbox, Input} from 'antd';
import store from '../redux/store';
import { disappearLogoutForm } from '../redux/action';

export default class LogoutForm extends React.Component {

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
      store.dispatch(disappearLogoutForm())
  }

render() {
return (
<Modal title="提示" visible={this.state.logoutVisible} onOk={this.onClose} okText="确认" cancelText="取消"
    onCancel={this.onClose}>
    您确认退出账号吗？
</Modal>
)
}
}