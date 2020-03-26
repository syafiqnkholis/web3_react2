import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import React, {Component} from "react";
import "./frame.css";

const { Header, Content, Footer } = Layout;

class Frame extends Component{
render(){
    return(
        <div>
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Row style={{marginTop:'auto', marginBottom:'auto'}}>
                        <Col span={16}>
                        <img src="https://cdns.klimg.com/merdeka.com/i/w/news/2012/08/11/77972/540x270/jus-kentang-ampuh-sembuhkan-sariawan-lambung.jpg"/>
                        </Col>
                        <Col span={8}>
                        <div className="judul">
                            <h1>Please,</h1>
                            <h2>TAKE MY POTATO</h2>
                        </div>
                        </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>,
        </div>
        )
    }
}

export default Frame;