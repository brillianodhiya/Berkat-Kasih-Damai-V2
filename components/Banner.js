import { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Checkbox, DatePicker } from "antd";
import stylesheet from "antd/dist/antd.min.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }],
};

const Banner = () => {
  const [hiroAnim, setHiroAnim] = useState("");
  const [regisModal, setRegisModal] = useState(false);

  const handleScroll = (e) => {
    // console.log(window.scrollY);
    // setHiroAnim(window.scrollY);
    if (window.scrollY > 0) {
      // console.log(window.scrollY);
      setHiroAnim("sides");
    } else {
      setHiroAnim("");
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

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Modal
        visible={regisModal}
        title="Form Daftar"
        footer={null}
        width={1200}
        onCancel={(e) => setRegisModal(false)}
      >
        <Form
          {...layout}
          name="basic"
          size="large"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="nama"
            label="Nama"
            rules={[
              {
                required: true,
                message: "Isikan nama anda!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
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
            <Input.Password />
          </Form.Item>
          <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker size="large" />
          </Form.Item>
          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              <span style={{ color: "#fff" }}>Daftar</span>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <section
        className="banner"
        id="beranda"
        style={{ background: "#F9F9F9" }}
      >
        <div className="banner-text">
          <img className="dot-dot" src="/asset/illustration.png" />

          <h1 style={{ margin: 0 }}>
            Komunitas <br />
            Berkat Kasih Damai
          </h1>
          <p style={{ color: "#B1EA8C" }}>#Give Your Love With The World</p>
          <a className="daftar" href="/daftar">
            <img className="daftarbutton" src="/asset/btn.png" />
          </a>
        </div>
        <img className="hiro-path" src="/asset/Group_1161.png" />
        <img className="hiro-path2" src="/asset/Group_1161.png" />
        <br />
        <img className="path1" src="/asset/Path_3677.png" />
        <img className="path2" src="/asset/Path_3550.png" />
      </section>
      <section className="banner2" id="profil">
        <img className="square-path" src="/asset/icon.png" />
        <img className="center-square" src="/asset/Path_3549.png" />
      </section>
      {/* <section className="banner3"></section> */}
      <style jsx>
        {`
          @media (max-width: 992px) {
            .banner .hiro-path {
              display: none !important;
            }
            .banner .hiro-path2 {
              position: absolute;
              right: 5%;
              width: 50%;
              top: 15%;
              z-index: 2;
            }
            .banner .banner-text .dot-dot {
              display: none !important;
            }
            .banner .banner-text {
              position: relative;
              padding: 14%;
              background: rgba(255, 255, 255, 0.7);
              width: 100%;
              transition: 0.6s;
            }
            .banner2 .center-square {
              ${hiroAnim === `sides`
                ? `
                
                width: 110px;
                `
                : `
                width: 150px;
              
              `}
              z-index: 10;
              left: 40%;
              transition: 0.6s;
              position: absolute;
            }
            .banner {
              position: relative;
              width: 100%;
              min-height: 80vh !important;
              display: flex;
              overflow: hidden;
            }
            .banner .banner-text h1 {
              font-weight: 500;
              font-size: 34px;
            }
            .banner .banner-text p {
              font-size: 100%;
            }
            .banner .banner-text .daftar .daftarbutton {
              position: relative;
              width: 200px;
              transition: 0.3s;
            }
            .banner .banner-text .daftar .daftarbutton:hover {
              width: 210px;
              transition: 0.3s;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .banner {
            position: relative;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .banner2 {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
          }

          .banner2 .center-square {
            ${hiroAnim === `sides`
              ? `
              
              width: 20vw;
              `
              : `
              width: 19vw;
            
            `}
            z-index: 5;
            left: 40%;
            transition: 0.6s;
            position: absolute;
          }

          .banner3 {
            position: relative;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .banner .banner-text {
            position: relative;
            ${hiroAnim === "sides"
              ? `
            padding-left: 12%;
              `
              : `
              padding-left: 11%;
            
              `}
            width: 50vw;
            transition: 0.6s;
            z-index: 10;
          }

          .banner .banner-text h1 {
            font-weight: 500;
            font-size: 3vw;
          }

          .banner .banner-text p {
            font-size: 1.4vw;
          }

          .banner2 .square-path {
            position: absolute;
            width: 100%;
          }

          .banner .hiro-path {
            width: 50%;
            opacity: 0;
            ${hiroAnim === "sides"
              ? `
            padding-top: 5%;
            padding-right: 5%;
            `
              : `
            padding-top: 5%;
            padding-right: 30%;
            `}
            z-index: -1;
            transition: 0.6s;
          }

          .banner .hiro-path2 {
            position: absolute;
            right: 5%;
            width: 50%;
            top: 25%;
            z-index: 2;
          }

          .banner .banner-text .dot-dot {
            position: absolute;
            top: -20vw;
            left: 5vw;
            z-index: -500;
            width: 110%;
            display: ${hiroAnim === "sides" ? `none` : `block`};
          }

          .banner .path1 {
            position: absolute;
            width: 10vw;
            top: 1%;
          }

          .banner .path2 {
            position: absolute;
            width: 30%;
            top: -15%;
            right: -15%;
          }

          .banner .banner-text .daftar .daftarbutton {
            position: relative;
            width: 18vw;
            transition: 0.3s;
          }
          .banner .banner-text .daftar .daftarbutton:hover {
            width: 18.2vw;
            transition: 0.3s;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
