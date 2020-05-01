import React from 'react';
import './Draw.less';
import { Descriptions,Card,Button } from 'antd';
import {appearResult,disappearResult,ranName,btDis} from '../../redux/action';
import store from '../../redux/store';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';

let names = null;
let name = null;
let timeV = 100;
let i =0;
let cishu = 0;
let fun = null;

export default class Draw extends React.Component {
constructor(props) {
super(props)
this.state = store.getState();
this.getRandomName = this.getRandomName.bind(this)
this.handleDraw = this.handleDraw.bind(this)
this.storeChange = this.storeChange.bind(this)
store.subscribe(this.storeChange)
}

storeChange(){
    this.setState(store.getState())
    }

    

componentDidUpdate(){
    document.addEventListener('keydown',this.handleDraw);
    }

    componentDidMount(){
        this.handleDraw()
    }

handleDraw(){
    fetch('http://47.97.116.8:8080/random/xg', {
      method:'get',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': ('Bearer ' + localStorage.getItem('token')) || '' 
      }
    }) .then(
        res => res.json()
    ).then(res =>{
        names = res.name;
       
    })
    }

    getRandom(start, end, fixed=0) {
        let differ = end - start
        let random = Math.random()
        return (start + differ * random).toFixed(fixed)
    }

    getRandomName(){
        let random = Math.random()
        i = (0 + 45 * random).toFixed(0)
        store.dispatch(ranName(names[i]))
        cishu = cishu + 1;
        if(cishu === 1){
        store.dispatch(appearResult())
        }else if(cishu === 10){
          clearInterval(fun);
        }
    }

    interval(){
       fun = setInterval(()=>{
        store.dispatch(btDis(true))
        let random = Math.random()
        i = (0 + 44 * random).toFixed(0)
        store.dispatch(ranName(names[i]))
        cishu = cishu + 1;
        if(cishu === 1){
        store.dispatch(appearResult())
        }else if(cishu >= 13){
          clearInterval(fun);
          cishu = 2;
          store.dispatch(btDis(false))
        }
    },100)
    }

render() {

return (
<div>
    <div  align="center">
       <SmileOutlined style={{width:100,height:70,fontSize:70,marginTop:10}}/>
    <Card title="究竟谁这么幸运呢" bordered={true} style={{ width: 300,marginTop:10,height:200}} loading={store.getState().resultVisible}>
    <h2 >「<font color="orange"> {store.getState().ranname}</font>」</h2>
    <h3>智慧与美丽的化身</h3>
    </Card>
        </div>
        <div align="center">
        <Button style={{marginTop:15}} onClick={this.interval} disabled={store.getState().btdis}>随机点一名帅哥/靓女</Button>
        {/* <Button style={{marginTop:10}} onClick={clearInterval(ev)}>tinz</Button> */}
        </div>
    {/* <div className="cammand1"> */}
        <div align="center">

        </div>
        {/* </div> */}
</div>
)
}
}



