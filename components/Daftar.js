import { useState } from "react";
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

const Daftar = () => {
  const [modal, ShowModal] = React.useState(false);
  const [regisModal, setRegisModal] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {/* <Button>TESTT</Button> */}
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
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setRegisModal(!regisModal)}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
      <section className="daftar">
        <div className="left-text">
          <h1>Ayo Buruan Gabung Dengan Kami</h1>
        </div>
        <div className="right-text">
          <a onClick={() => setRegisModal(!modal)}>
            <img src="/asset/Subscribe.png" />
          </a>
        </div>
      </section>
      <style jsx>
        {`
          @media (max-width: 992px) {
            .left-text h1 {
              font-weight: 500;
              font-size: 34px !important;
              margin: 0;
            }
            .right-text img {
              width: 200px !important;
              transition: 0.6s;
            }
          }
        `}
      </style>
      <style jsx>{`
        .daftar {
          position: relative;
          width: 100%;
          display: flex;
          margin-top: 5vw;
          align-content: center;
          flex-direction: column;
          align-items: center;
        }
        .left-text {
          font-size: 1.4vw;
        }
        .left-text h1 {
          font-weight: 500;
          font-size: 3vw;
          margin: 0;
        }
        .right-text img {
          width: 20vw;
          transition: 0.6s;
        }
        .right-text img:hover {
          width: 20.1vw;
          transition: 0.6s;
        }
        .modal {
          display: ${modal ? `block` : `none`};
          position: fixed;
          transition: 0.6s;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
          background-color: #fefefe;
          transition: 0.6s;

          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }

        .close {
          transition: 0.6s;
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: black;
          transition: 0.6s;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Daftar;
