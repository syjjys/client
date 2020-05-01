import React from 'react';
import { Modal, Collapse, Form, Checkbox, Input,Select,Typography} from 'antd';
import { SettingOutlined} from
'@ant-design/icons';
import store from '../redux/store';
import { disappearMoodsForm } from '../redux/action';

const { Panel } = Collapse;

export default class MoodsForm extends React.Component {

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
      store.dispatch(disappearMoodsForm())
  }

render() {
return (
<Modal title="Moods" visible={this.state.moodsVisible} onOk={this.onClose} okText="关闭" cancelText="取消"
    onCancel={this.onClose} style={{marginTop:-60}}>
  <Collapse
          defaultActiveKey={['1']}
          expandIconPosition="right"
        >
          <Panel header="This is panel header 1" key="1" extra={<SettingOutlined />}>
            <div>我是个好人</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={<SettingOutlined />}>
            <div>我是个坏人</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={<SettingOutlined />}>
            <div>我想去旅游</div>
          </Panel>
        </Collapse>
</Modal>
)
}
}