import React from "react";
import { Flex, Image, Layout, theme } from "antd";
import ShanerPic from "./components/images/when.png";
import Navbar from "./components/Navbar";

const { Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "0 48px" }}>
        <Flex horizontal>
          <div
            style={{
              padding: 24,
              height: 1000,
              width: "50%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
          <div
            style={{
              padding: 24,
              height: 1000,
              width: "50%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            More Content
          </div>
        </Flex>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;

