import React from "react";
import { Flex, Image, Layout, theme } from "antd";
import ShanerPic from "./components/images/when.png";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={ShanerPic} width={100} />
        <Flex style={{ color: "white" }}>Eventually a wedding sign rental website</Flex>
      </Header>
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
      <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;
