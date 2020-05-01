import React from 'react';
import { Modal, Button, Form, Checkbox, Input} from 'antd';
import store from '../redux/store';
import { disappearLoginForm,usernameOrEmail,password,disappearChangepasswordForm,appearChangepasswordForm,oldPassword,newPassword,CgUsernameOrEmail} from '../redux/action';


export default class ChangePasswordForm extends React.Component {

constructor(props) {
super(props)
this.state = store.getState();
this.storeChange = this.storeChange.bind(this)
this.savelogin = this.storeChange.bind(this)
store.subscribe(this.storeChange)

}

storeChange(){
this.setState(store.getState())
}

onClose(){
store.dispatch(disappearChangepasswordForm())
}

handleChangePassword(){
  store.dispatch(appearChangepasswordForm());
}

getCgUsernameOrEmail(e){
  store.dispatch(CgUsernameOrEmail(e.target.value))
}

getOldPassword(e){
  store.dispatch(oldPassword(e.target.value))
}

getNewPassword(e){
    store.dispatch(newPassword(e.target.value))
  }

handleOk(){
    fetch('http://47.97.116.8:8080/api/auth/password', {
  method:'PATCH',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'PATCH',
      'Access-Control-Request-Headers':'X-Custom-Header',
      'Access-Control-Allow-Credentials': true,
      // Authorization: `Bearer ${localStorage.getItem('token')}` // 从localStorageStorage中获取access token
  },
  body: JSON.stringify({"usernameOrEmail":store.getState().cgusernameoremail,"oldPassword":store.getState().oldpassword,"newPassword":store.getState().newpassword})
}) .then(response => 
  response.json().then(json => {
      if(!response.ok) {
          return Promise.reject(json);
      }
      return json;
  })
).catch((res)=>{
  console.log(res+1111111111)
})
}

onClose(){
  store.dispatch(disappearChangepasswordForm())
}

render() {
return (
<Modal title="修改密码" visible={this.state.changepasswordVisible} onOk={this.handleOk}  okText="确定修改" cancelText="取消"
  onCancel={this.onClose}>
  <Form style={{ marginLeft: 70, marginTop: 30 }}>
  <Form.Item label="账号/邮箱" style={{marginLeft:-18}} name="usernameOrEmail" rules={[ { required: true, message: 'Please input your uernameOrEmail!' , }, ]}>
      <Input style={{width:188}} onChange={(e)=>this.getCgUsernameOrEmail(e)}  />
    </Form.Item>
    <Form.Item label="旧密码" name="oldPassword" rules={[ { required: true, message: 'Please input your oldPassword!' , }, ]}>
      <Input style={{width:188}} onChange={(e)=>this.getOldPassword(e)}  />
    </Form.Item>
    <Form.Item label="新密码:" name="newPassword"  rules={[ { required: true,
      message: 'Please input your password!' , }, ]}>
      <Input.Password style={{width:188}} onChange={(e)=>this.getNewPassword(e)}/>
    </Form.Item>
  </Form>
</Modal>
)
}
}