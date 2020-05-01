import React from 'react';
import { Layout, Row, Col, Menu, Card, Avatar } from 'antd';
import './CardOne.less'
import { HeartOutlined,LikeOutlined,DislikeOutlined,LikeFilled,DislikeFilled} from
'@ant-design/icons';
import { appearArticleForm} from'../../redux/action';
import store from '../../redux/store';

const { Meta } = Card;

export default class BasicCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        }
        
        storeChange(){
        this.setState(store.getState)
        }

displayArticleModal = () => {
store.dispatch(appearArticleForm())
}

render() {
return (
<div id='nice' className="wall" style={{width:1400}}>
    <Row gutter={[20, 30]} style={{ marginLeft: 32,marginTop:40 }} className="cardWall">
        <Col span={4}>
        <Card title='today' hoverable="true" type="inner" cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
        <LikeOutlined key="like" />,
        <DislikeOutlined key="dislike" />
        ]} onClick={this.displayArticleModal}>
        <Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
        />
        </Card>
        </Col>
        <Col span={4}>
        <Card title='15' hoverable type="inner" cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='14' hoverable type="inner" cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='17' hoverable type="inner" cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
        <Col span={4}>
        <Card title='18' hoverable cover={<img alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        fsfseef
        </Card>
        </Col>
    </Row>
</div>)
}
}