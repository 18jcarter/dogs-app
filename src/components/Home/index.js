import React from "react";
import { Flex, Layout, Row, Col, Button, Typography, Image } from "antd";
import Navbar from "../Navbar";
import SignPic from "../images/WeddingSignPic.jpeg";

const { Title } = Typography;
const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Flex>
          <Flex vertical style={{ width: "50%", paddingLeft: 100 }}>
            <Title className="primaryText" style={{ fontSize: 100 }}>
              Premium Wedding Sign Rentals.
            </Title>
            <Title level={2} className="primaryText">
              Specifically designed for you.
            </Title>
          </Flex>
          <Flex style={{ width: "50%" }}>
            <Image src={SignPic} preview={false} />
          </Flex>
        </Flex>
        <Flex>
          <div className="mainBackground">
            <Flex style={{ width: "100%" }}>
              <Row style={{ paddingTop: 48, width: "100%" }}>
                <Col span={6} offset={2}>
                  <div className="homepageText">Let us be your something borrowed...</div>
                </Col>
                <Col span={4} offset={9}>
                  <div className="homepageText">...and your something Blue</div>
                </Col>
              </Row>
            </Flex>
            <Flex
              align="flex-end"
              justify="center"
              style={{ paddingBottom: "3%", width: "100%", flexGrow: 1 }}
            >
              <Button style={{ color: "#436585" }} size="large" shape="round">
                View Rentals
              </Button>
            </Flex>
          </div>
        </Flex>
        <Flex>FORTNITEFORTNITEFORNITEFORTNITE</Flex>
      </Content>
      <Footer style={{ textAlign: "center" }}>MME ©2023 Created by 3 Bots</Footer>
    </Layout>
  );
};

export default HomePage;
