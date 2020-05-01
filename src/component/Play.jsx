import { Drawer, Button,Modal } from 'antd';
import React from 'react';
import store from '../redux/store';
import { appearDrawForm,disappearDrawForm,disappearPlayForm} from '../redux/action';
import { SmileOutlined} from '@ant-design/icons';

export default class Play extends React.Component {
 constructor(props){
     super(props)
     this.state = store.getState();
     this.storeChange=this.storeChange.bind(this)
     store.subscribe(this.storeChange)
 }

 storeChange(){
     this.setState(store.getState())
 }

onClose(){
    store.dispatch(disappearPlayForm())
}

  render() {
    return (
      <div>
        <Drawer
          title="抽签"
          visible={this.state.playVisible}
          onClose={this.onClose}
          placement="left"
          width="700"
        >
          <h1>敬请期待  :-)</h1>
          
        </Drawer>
      </div>
    );
  }
}