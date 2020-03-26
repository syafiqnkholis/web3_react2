import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css";

const { Header, Content, Footer } = Layout;

class Navbar extends Component{
render(){
  return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/card">Card</Link></Menu.Item>
        <Menu.Item key="3"><a href="https://github.com/syafiqnkholis" target="_blank">my github</a></Menu.Item>
      </Menu>
    </Header>
  </Layout>
  )
}
}

export default Navbar;