import React from "react";
import { Flex, Button, Typography, Image, Carousel } from "antd";
import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  WeddingSignPic,
} from "../images";

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <Flex style={{ background: '#F2EDE3', height: 600 }}>
        <Flex vertical style={{ flex: 1, paddingRight: 100, paddingLeft: 100 }}>
          <Title className="primaryText" style={{ fontSize: 80 }}>
            Premium Wedding Sign Rentals.
          </Title>
          <Title level={2} className="primaryText">
            For memories that last an eternity.
          </Title>
          <Flex style={{ paddingTop: 12 }} justify="center">
            <Button id="primaryButton" size="large" shape="round">
              Find your perfect decor
            </Button>
          </Flex>
        </Flex>
        <Flex style={{ flex: 1 }}>
          <Image src={WeddingSignPic} preview={false} />
        </Flex>
      </Flex>
      <Flex
        justify="center"
        align="center"
        style={{ background: "#748980", height: 200 }}
      >
        <Flex
          justify="center"
          align="center"
          style={{ borderRadius: 15, background: "#F2EDE3", width: "60%" }}
        >
          <Flex
            vertical
            justify="center"
            align="center"
            style={{ width: "80%" }}
          >
            <Title
              className="secondaryText"
              style={{ fontWeight: "lighter", fontSize: 24 }}
            >
              Forget about the stress of decorating a wedding.
            </Title>
            <Title
              className="secondaryText"
              style={{
                marginTop: 0,
                textAlign: "center",
                fontWeight: "lighter",
                fontSize: 20,
              }}
            >
              Aesthetic rentable wedding decor with looks that will elevate any
              occasion, without breaking the budget.
            </Title>
          </Flex>
        </Flex>
      </Flex>
      <Carousel autoplay effect="fade" dotPosition="bottom">
        <Image src={Carousel1} preview={false} />
        <Image src={Carousel2} preview={false} />
        <Image src={Carousel3} preview={false} />
        <Image src={Carousel4} preview={false} />
      </Carousel>
    </>
  );
};

export default HomePage;
