import React, { useState } from "react";
import { Flex, Layout, Menu, Typography } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const items = [
  { label: "About Us", key: "about_us" },
  {
    label: "Rentals",
    key: "rentals",
    children: [
      {
        label: "Welcoming Committee",
        key: "rental:1",
      },
      {
        label: "Aesthetic Compliment",
        key: "rental:2",
      },
      {
        label: "Extra Details",
        key: "rental:3",
      },
    ],
  },
  { label: "Contact", key: "contact" },
  { label: "Cart", key: "cart" },
];

const Navbar = () => {
  const [selectedKeys, setSelectedKeys] = useState("home");

  const onClick = (item) => {
    console.log("click ", item);
    setSelectedKeys(item.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        display: "flex",
        alignItems: "center",
        background: "#F2EDE3",
        justifyContent: "space-around",
      }}
    >
      <Title className="primaryText" style={{ textAlign: "center", flex: 2 }}>
        Wedding Rental Name Placeholder
      </Title>
      <Menu
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={onClick}
        items={items}
        style={{
          background: "#F2EDE3",
          width: "min-content",
          flex: 1,
        }}
      />
    </Header>
  );
};

export default Navbar;
