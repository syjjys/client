import React from 'react';
import { Input,Spin } from 'antd';
import './MainXg.less';
import {spin} from '../../redux/action';
import store from '../../redux/store';
import { BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Draw from './Draw.jsx';
import history from '../../../utils/history';

let text = null;

export default class MainXg extends React.Component {
constructor(props) {
super(props)
this.state = {
    isRo:false
}
this.handleSend = this.handleSend.bind(this);
this.storeChange = this.storeChange.bind(this)
store.subscribe(this.storeChange)
}

storeChange(){
  this.setState(store.getState())
  }

componentDidUpdate(){
document.addEventListener('keydown',this.onkeydown);
}

handleSend = ()=>{
 alert("i am a handsome");
}

handleLogin(){
    store.dispatch(spin(true))
    if(text === "777"){
    fetch('http://47.97.116.8:8080/api/auth/signin', {
      method:'post',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': ('Bearer ' + localStorage.getItem('token')) || '' 
      },
      body: JSON.stringify({"usernameOrEmail":"shaoy","password":"123123"})
    }) .then(
      response => 
      response.json().then(json => {
          if(!response.ok) {
              return Promise.reject(json);  
          }
          localStorage.setItem("token",json.accessToken);
          localStorage.setItem("username","shaoy");
        this.setState({
            isRo:true
        })
        store.dispatch(spin(false));
          return json;
      })
    ).catch((res)=>{
      console.log(res+1111111111)
    })
    }
    else{
      store.dispatch(spin(false))
        alert("小朋友，你输错了!");
    }
    }

 getOrder(e){
       text = e.target.value
}

onkeydown = (e)=>{
if (e.keyCode === 13) {

this.handleLogin()
}
}


render() {
    if(this.state.isRo){
      return <Redirect to= "/random" />;
    }
return (
<div>
    <div className="bc"></div>
    <div align="center">
        <Input.Password placeholder="17信管暗号" className="cammand" style={{width:300,marginTop:15,textAlign:"center"}}
            visibilityToggle={false} onKeyDown={(e)=>this.onkeydown(e)} onChange={(e)=>{this.getOrder(e)}}/>
             <Spin spinning={store.getState().spining} style={{marginLeft:10}}/>
    </div>
   
    
      
</div>
)
}
}



