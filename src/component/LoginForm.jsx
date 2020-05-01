import React from 'react';
import { Modal, Button, Form, Checkbox, Input} from 'antd';
import store from '../redux/store';
import $ from  'jquery';
import qs from 'qs';
import { disappearLoginForm,usernameOrEmail,password,disappearChangepasswordForm,appearChangepasswordForm,person} from '../redux/action';
import Axios from '../axios/axios';


export default class LoginForm extends React.Component {

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
store.dispatch(disappearLoginForm())
}

handleLogin(){
//   var data = qs.stringify({"usernameOrEmail":"shaoy","password":"123456"});
// Axios.post("api/auth/signin",data).then(({res})=>{
// if(res.code==200){
// localStorage.setItem("token", res.detail.token);
// localStorage.setItem("username", res.detail.username);
// Axios.defaults.headers.common['Authorization'] = "Bearer " + res.detail.token
// alert("success!");
// } else {
// }
// }).catch(
// // )
// let data = new FormData();
// // data.append("usernameOrEmail","shaoy");
// // data.append("password","123456");
// let usernameOrEmail = this.usernameoremail.value
// let password = this.refs.password.value
// store.dispatch(usernameOrEmail(usernameOrEmail))
// store.dispatch(password(password))
let username = store.getState().usernameOrEmail
let password1 = store.getState().password
fetch('http://47.97.116.8:8080/api/auth/signin', {
  method:'post',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': ('Bearer ' + localStorage.getItem('token')) || '' // 从localStorageStorage中获取access token
  },
  body: JSON.stringify({"usernameOrEmail":username,"password":password1})
}) .then(
  response => 
  response.json().then(json => {
      if(!response.ok) {
          return Promise.reject(json);  
      }
      localStorage.setItem("token",json.accessToken);
      localStorage.setItem("username",username);
      return json;
  })
).catch((res)=>{
  console.log(res+1111111111)
})
}
getUsername(e){
  store.dispatch(usernameOrEmail(e.target.value))
}

getPassword(e){
  store.dispatch(password(e.target.value))
  
}

handleChangePassword(){
  store.dispatch(appearChangepasswordForm());
}

savelogin(){

}

render() {
 
return (
<Modal title="登录" visible={this.state.loginVisible} onOk={this.handleLogin} okText="登录" cancelText="取消"
  onCancel={this.onClose}>
  <Form style={{ marginLeft: 70, marginTop: 30 }}>
    <Form.Item label="邮箱/账号" name="usernameoremail" rules={[ { required: true, message: 'Please input your username!' , }, ]}>
      <Input style={{width:188}} onChange={(e)=>this.getUsername(e)}  />
    </Form.Item>
    <Form.Item label="密码" name="password" style={{marginLeft:33}} rules={[ { required: true,
      message: 'Please input your password!' , }, ]}>
      <Input.Password onChange={(e)=>this.getPassword(e)}/>
    </Form.Item>
    <Form.Item>
       <Button type="link" htmlType="button" style={{marginLeft:200}} >
        <div onClick={this.handleChangePassword} >修改密码</div>
      </Button>
    </Form.Item>
  </Form>
</Modal>
)
}
}