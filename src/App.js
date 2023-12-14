import { ConfigProvider } from "antd";
import React from "react";
// import "./App.css";

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <div>FORTNITEFORTNITEFORNITEOFRNITE</div>
  </ConfigProvider>
);

export default App;
