import Head from "next/head";
import { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import stylesheet from "antd/dist/antd.min.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Header = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [changeLayanan, setLayanan] = useState(1);
  const [active, setActive] = useState(false);
  const [modalMasuk, setModalMasuk] = useState(false);

  // console.log(headerClass)
  const handleScroll = (e) => {
    // console.log(e, "SCROLL");
    setActive(false);
    if (window.scrollY > 0) {
      // console.log(window.scrollY);
      setHeaderClass("sticky");
    } else {
      setHeaderClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const [form] = Form.useForm();
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <Modal
        visible={modalMasuk}
        title="Form Masuk"
        onCancel={(e) => {
          setModalMasuk(false);
        }}
        width={1200}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Format Email tidak sesuai!",
              },
              {
                required: true,
                message: "Tolong isikan Email!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Tolong isikan password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              <span style={{ color: "#fff" }}>Masuk</span>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Head>
        <title>Berkat Kasih Damai</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          charSet="UTF-8"
        ></meta>
        <link rel="icon" href="/asset/BKD_fix.png" />
      </Head>
      <header id="header" className={active ? "active" : ""}>
        <a href="#" className="logo">
          <img src="/asset/BKD_fix.png" />
        </a>
        <ul>
          {/* <li>
            <a href="#home">Home</a>
          </li> */}
          <li>
            <a href="/#beranda" onClick={() => setActive(false)}>
              Beranda
            </a>
          </li>
          <li>
            <a href="/#informasi" onClick={() => setActive(false)}>
              Informasi
            </a>
          </li>
          <li>
            <a href="/#galeri" onClick={() => setActive(false)}>
              Galeri
            </a>
          </li>
          <li>
            <a href="/#testimoni" onClick={() => setActive(false)}>
              Testimoni
            </a>
          </li>
          <li>
            <a className="masuk" href="/masuk">
              <img src="/asset/Group_1164.png" />
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={() => setActive(!active)}></div>
      </header>
      <style jsx>
        {`
          .toggle {
            display: none;
          }

          @media (max-width: 992px) {
            header .logo {
              position: relative;
              font-weight: 700;
              color: #fff;
              text-decoration: none;
              font-size: 2em;
              text-transformation: uppercase;
              letter-spacing: 2px;
              transition: 0.6s;
              display: flex;
              justify-content: center;
            }

            header .logo img {
              height: 44px;
              transition: 0.6s;
            }

            .toggle {
              display: block;
              position: relative;
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
            .toggle:before {
              content: "";
              position: absolute;
              top: 4px;
              width: 100%;
              height: 2px;
              background: #000;
              z-index: 1;
              box-shadow: 0 10px 0 #000;
              transition: 0.5s;
            }
            .toggle:after {
              content: "";
              position: absolute;
              bottom: 4px;
              width: 100%;
              height: 2px;
              background: #000;
              z-index: 1;
              transition: 0.5s;
            }
            header {
              background: #fff;
              ${headerClass === "sticky"
                ? `
              padding: 5px 50px !important;

            background: #fff;
            border-bottom: 1px solid (0,0,0,.1);
            `
                : `
              padding: 5px 50px !important;
              `}
            }
            header ul {
              position: absolute;
              top: 59px;
              left: 0;
              width: 100%;
              background: #fff;
              height: ${active ? `100vh` : `0`};
              text-align: center;
              overflow: auto;
              visibility: hidden;
              opacity: 0;

              transition: 0.6s;
            }
            header.active ul {
              visibility: visible;
              opacity: 1;
              display: block;
              padding-top: 20px;
            }
            header.active ul li a {
              display: inline-block;
              margin: 10px 0;
            }
            header.logo,
            header ul li a {
              color: #000;
            }
            header .logo img {
              position: relative;
              height: 52px !important;
              transition: 0.6s;
            }
            .masuk img {
              height: 40px !important;
              transition: 0.3s;
            }
            header ul li a {
              position: relative;
              margin: 0 1vw;
              text-decoration: none;
              color: #000;
              font-size: 18px;
              letter-spacing: 0.2vw;
              font-weight: 300;
              transition: 0.6s;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${headerClass === "sticky"
              ? `
            padding: 0.5vw 10vw;
            background: #fff;
            border-bottom: 1px solid (0,0,0,.1);
            `
              : `padding: 0.5vw 12vw;`}
            z-index: 1000;
            background: #fff;

            transition: 0.6s;
          }

          .masuk img {
            height: 3vw;
            transition: 0.3s;
          }

          header .logo {
            position: relative;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            font-size: 2em;
            text-transformation: uppercase;
            letter-spacing: 2px;
            transition: 0.6s;
            display: flex;
            justify-content: center;
          }

          header .logo img {
            position: relative;
            height: 5vw;
            transition: 0.6s;
          }

          header ul {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1vw;
          }

          header ul li {
            position: relative;
            list-style: none;
          }

          header ul li a {
            position: relative;
            margin: 0 1vw;
            text-decoration: none;
            color: #000;
            font-size: 1.4vw;
            letter-spacing: 0.2vw;
            font-weight: 300;
            transition: 0.6s;
          }
        `}
      </style>
      {/* responsive  */}
    </div>
  );
};

export default Header;
