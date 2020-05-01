import { Drawer, Dropdown,Menu,Button, Form, Checkbox, Input, Modal ,Select,Descriptions} from 'antd';
import React from 'react';
import store from '../redux/store';
import { appearDrawForm,disappearDrawForm } from '../redux/action';
import { DownOutlined,SmileOutlined,CoffeeOutlined} from '@ant-design/icons';
import './WriteMood.less';

const { TextArea } = Input;
const { Option } = Select;
const menu = (
<Menu>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
        </a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
        </a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
        </a>
    </Menu.Item>
</Menu>
);

export default class WriteMood extends React.Component {
constructor(props){
super(props)
this.state = store.getState();
this.storeChange = this.storeChange.bind(this)
store.subscribe(this.storeChange)
}

storeChange(){
this.setState(store.getState())
}

// showDrawer = () => {
// this.setState({
// drawVisible: true,
// });
// };

onClose = () => {
store.dispatch(disappearDrawForm())
};

render() {
return (
<div>
    <Drawer title="今天过得如何" visible={this.state.drawVisible} width="700" onClose={this.onClose} placement="right">
        心情如何：<Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">不错&nbsp;
                <SmileOutlined />
            </Option>
            <Option value="lucy">不太好</Option>
            <Option value="disabled">
                平平淡淡
            </Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;努力了吗：<Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">是的&nbsp;
                <SmileOutlined />
            </Option>
            <Option value="lucy">没有</Option>
            <Option value="normal">正常</Option>
            <Option value="disabled">
                颓废
            </Option>
        </Select>
        <br />
        <br />
        想念Ta吗：<Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">我很幸福&nbsp;
                <SmileOutlined />
            </Option>
            <Option value="lucy">还在等待</Option>
            <Option value="normal">没有感觉</Option>
            <Option value="disabled">
                已经看淡
            </Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活累吗：<Select defaultValue="lucy"
            style={{ width: 120 }}>
            <Option value="jack">累并快乐&nbsp;
                <SmileOutlined />
            </Option>
            <Option value="lucy">平平淡淡</Option>
            <Option value="normal">压力很大</Option>
        </Select>
        <br />
        <br />
        <TextArea rows={7} placeholder="想对自己说些什么" />
        <br />
        <br />
        <Button block>保存生活</Button>
    <Descriptions className="description">
    <Descriptions.Item >有趣的人生，一半是山川湖海</Descriptions.Item>
  </Descriptions>
        </Drawer>
</div>
);
}
}