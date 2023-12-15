import React, { useState } from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

var items = [
  { title: "Ty", key: "ty" },
  { title: "is", key: "is" },
  { title: "a", key: "a" },
  { title: "bot", key: "bot" },
].map((val) => ({
  key: val.key,
  label: val.title,
}));

export default function Navbar() {
  const [selectedKeys, setSelectedKeys] = useState("ty");

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
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={onClick}
        items={items}
        style={{
          flex: 1,
          minWidth: 100,
        }}
      />
    </Header>
  );
}
