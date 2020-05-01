import React from 'react';
import BasicCard from './card/CardOne.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import LogoutForm from './LogoutForm.jsx';
import PinfoForm from './PinfoForm.jsx';
import ChangePinfoForm from './ChangePinfoForm.jsx';
import DisplayArticle from './DisplayArticle.jsx';
import MoodsForm from './MoodsForm.jsx';
import ChangePasswordForm from './ChangePasswrod.jsx';
import { appearLoginForm,appearDrawForm,appearPlayForm, appearRegisterForm,appearLogoutForm,appearPinfoForm,appearMoodsForm} from'../redux/action';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {
CoffeeOutlined,
EditOutlined,
SmileOutlined,
UserOutlined,
UserAddOutlined,
UserDeleteOutlined,
ScheduleOutlined,
HeartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import './Navigation.less';
import store from '../redux/store';
import BasicCardTwo from './card/CardTwo.jsx';
import BasicCardThree from './card/CardThree.jsx';
import BasicCardFour from './card/CardFour.jsx';
import WriteMood from './WriteMood.jsx';
import Play from './Play.jsx';

const { SubMenu } = Menu;

class BasicPage extends React.Component {
constructor(props) {
super(props)
this.state = store.getState();
this.storeChange = this.storeChange.bind(this)
store.subscribe(this.storeChange)
if(localStorage.getItem("username")==null){
localStorage.setItem("username","Person")
}
}

storeChange(){
this.setState(store.getState)
}

handleClick = e => {
this.setState({
current: e.key,
});
};

showLoginModal = () => {
store.dispatch(appearLoginForm())
};

showRegisterModal = () => {
  store.dispatch(appearRegisterForm())
}

showDraw = () => {
store.dispatch(appearDrawForm())
}

showPinfoDraw = () => {
store.dispatch(appearPinfoForm())
}

showPlay = () => {
store.dispatch(appearPlayForm())
}

showLogoutModal = () => {
store.dispatch(appearLogoutForm())
}

showMoodsForm = () => {
  store.dispatch(appearMoodsForm())
  }


render() {
  let Person = store.getState().person;
return (
<div className="content">
  <Router>
    <Menu mode="horizontal" id="navigation" onClick={this.handleClick} className="menu" >
      <CoffeeOutlined style={{ marginLeft: 0, fontSize: 30, marginTop: 0 }} />
      <Menu.Item key="mail" style={{ marginLeft: 100 }}>
        <Link to="/lifetime"> Life-Time</Link>
      </Menu.Item>
      <Menu.Item key="app" style={{ marginLeft: 30 }}>
        <Link to="/darknight">Dark-Night</Link>
      </Menu.Item>
      <Menu.Item key="life" style={{ marginLeft: 30 }}>
        <Link to="/unknownfuture">Unknown-Future</Link>
      </Menu.Item>
      <Menu.Item key="alipay" style={{ marginLeft: 30 }}>
        <Link to="/dazzingsun">Dazzling-Sun</Link>
      </Menu.Item>
      <Menu.Item key="write" style={{ marginLeft: 90 }} onClick={this.showDraw}>
        <EditOutlined />Write Your Mood</Menu.Item>
      <Menu.Item key="random" style={{ marginLeft: 10 }} onClick={this.showPlay}>
        <SmileOutlined />Draw</Menu.Item>
<SubMenu title={<div><UserOutlined />{localStorage.getItem("username")}</div>} style={{ marginLeft: 60 }} >
      <Menu.Item key="login" onClick={this.showLoginModal} >
        <UserOutlined />
         登录
      </Menu.Item>
      <Menu.Item key="register"  onClick={this.showRegisterModal}>
      <UserAddOutlined />
         注册
      </Menu.Item>
      <Menu.Item key="logout"  onClick={this.showLogoutModal}>
      <UserDeleteOutlined />
      注销
      </Menu.Item>
      <Menu.Item key="Pinfo"  onClick={this.showPinfoDraw}>
      <ScheduleOutlined />
      个人信息
      </Menu.Item>
      <Menu.Item key="moodlist"  onClick={this.showMoodsForm}>
      <HeartOutlined />
      Moods
      </Menu.Item>
      </SubMenu>
    </Menu>
    <Route path="/" exact component={BasicCard}></Route> 
   <Route path="/index.html" exact component={BasicCard}></Route> 
    <Route path="/lifetime" exact component={BasicCard}></Route>
    <Route path="/darknight" component={BasicCardTwo}></Route>
    <Route path="/unknownfuture" component={BasicCardThree}></Route>
    <Route path="/dazzingsun" component={BasicCardFour}></Route>
  </Router>
  <ChangePasswordForm />
  <MoodsForm />
  <DisplayArticle />
  <ChangePinfoForm />
  <LogoutForm />
  <LoginForm />
  <RegisterForm />
  <WriteMood />
  <PinfoForm />
  <Play />
</div>
)
}
}

export default BasicPage;