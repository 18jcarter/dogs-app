import React from "react";
import { Flex, Layout, Button, Typography, Image, Carousel } from "antd";
import SignPic from "../images/WeddingSignPic.jpeg";

const { Title } = Typography;
const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Content>
        <Flex style={{ height: 600}}>
          <Flex vertical style={{ width: "50%", paddingLeft: 100 }}>
            <Title className="primaryText" style={{ fontSize: 80 }}>
              Premium Wedding Sign Rentals.
            </Title>
            <Title level={2} className="primaryText">
              For memories that last an eternity.
            </Title>
            <Flex style={{ paddingTop: 12 }} justify="center">
              <Button id="primaryButton" size="large" shape="round">
                Find your perfect decor
              </Button >
            </Flex>
          </Flex>
          <Flex style={{ width: "50%" }}>
            <Image src={SignPic} preview={false} />
          </Flex>
        </Flex>
        <Flex justify="center" align="center" style={{ background: '#748980', height: 200}}>
          <Flex justify="center" align="center" style={{ borderRadius: 15, background: '#F2EDE3', width: '60%' }}>
            <Flex vertical justify="center" align="center" style={{ width: '80%' }}>
              <Title className="secondaryText" style={{ fontWeight: "lighter", fontSize: 24 }}>
                Forget about the stress of decorating a wedding.
              </Title>
              <Title className="secondaryText" style={{ marginTop: 0, textAlign:"center", fontWeight: "lighter", fontSize: 20 }}>
                Aesthetic rentable wedding decor with looks that will elevate the occasion, without breaking the budget.
              </Title>
            </Flex>
          </Flex>
        </Flex>
          <Carousel autoplay effect="fade"> 
            <div><h3 className="carouselImage">Ty</h3></div>
            <div><h3 className="carouselImage">is</h3></div>
            <div><h3 className="carouselImage">a</h3></div>
            <div><h3 className="carouselImage">bot!</h3></div>
          </Carousel>
      </Content>
      <Footer style={{ textAlign: "center" }}>MME ©2023 Created by 3 Bots</Footer>
    </Layout>
  );
};

export default HomePage;
