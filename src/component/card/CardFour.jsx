import React from 'react';
import { Layout, Row, Col, Menu, Card, Avatar } from 'antd';
import './CardOne.less'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import store from '../../redux/store';

const { Meta } = Card;

export default class BasicCardFour extends React.Component {

    render() {
        return (
            <div id='nice' className="wall">
                <Row gutter={[40, 40]} style={{ marginLeft: 50,marginTop:40 }} className="cardWall">
                    <Col span={6}>
                        <Card title='1' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            feefefsfesef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='2' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            efssefefs
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='3' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fesefsefs
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='4' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='5' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='6' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='7' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='8' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='9' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='10' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='11' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='12' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='13' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='14' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='15' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='16'
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='17'
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                    <Col span={6}>
                        <Card title='18' hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            fsfseef
                            </Card>
                    </Col>
                </Row>
            </div>)
    }
}