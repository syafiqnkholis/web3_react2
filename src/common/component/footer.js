import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import "./navbar.css";

const { Header, Content, Footer} = Layout;
class kaki extends Component{
render(){
  return (
      <div>
  <Layout className="layout">
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  </div>
  )
};
}

export default kaki;
