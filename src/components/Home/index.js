import React from "react";
import { Flex, Layout, Row, Col, Button } from "antd";
import Navbar from "../Navbar";

const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
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
