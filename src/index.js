import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Products from "./components/ProductList";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          alignItems: "center",
          background: "#F2EDE3",
          justifyContent: "space-around",
          zIndex: 1000,
        }}
      >
        <Navbar />
      </Header>
      <Content style={{ marginTop: "60px" }}>
        <RouterProvider router={router} />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        MME ©2023 Created by 3 Bots
      </Footer>
    </Layout>
  </React.StrictMode>
);
