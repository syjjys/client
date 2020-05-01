import React from 'react';
import { Menu, Affix, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


export default class BasicMenu extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <MailOutlined />
                    Navigation 8888888888
            </Menu.Item>
                <Menu.Item key="app" >
                    <AppstoreOutlined />
                    Navigation Two
            </Menu.Item>
                <Menu.Item key="three" >
                    <AppstoreOutlined />
                    Navigation Three
            </Menu.Item>
            </Menu>

        )
    }
}