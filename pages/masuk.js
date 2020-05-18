import * as React from "react";
import stylesheet from "antd/dist/antd.min.css";
import { Form, Input } from "antd";

const Daftar = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        background: "#5aaaf9",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,800,900&display=swap");

        * {
          margin: 0;
          padding: 0;
          font-family: "Roboto";
        }
        .path1 {
          width: 120vw;
          position: absolute;
          left: -60vw;
          top: -25vh;
        }
        .path2 {
          width: 120vw;
          position: absolute;
          bottom: -55vh;
          right: -10vw;
        }
        .motoran {
          position: absolute;
          width: 25vw;
          right: 10vw;
          bottom: 20vh;
        }
        .logo-bkd {
          position: absolute;
          top: 5vh;
          right: 5vh;
          width: 7vw;
        }
        .container-login {
          min-height: 90vh;
          width: 35vw;
          left: 8vw;
          // background: #fff;
          top: 5vh;
          position: absolute;
          padding-top: 5vh;
          padding-bottom: 5vh;
        }
        .my-dvider {
          margin-top: 1vh;
          border-top: 0.3vw solid #fff;
          width: 50%;
          border-radius: 0.5vw;
          margin-right: 25%;
          margin-left: 25%;
        }
        .container-login {
          display: flex;
          align-content: center;
          flex-direction: column;
        }
        .box-text {
          margin-top: 2vh;
        }
        .title-text {
          font-size: 2.4vw;
          color: #fff;
        }
        .subtittle-text {
          text-align: center;
          color: #fff;
          font-weight: 300;
          font-size: 1.5vw;
        }
        .form {
          margin-top: 5%;
        }
        label {
          font-size: 1.4vw;
          color: #fff;
          font-weight: 300;
          margin: 1vw;
        }
        .icon-text img {
          width: 1.4vw;
        }
        ::placeholder {
          color: #fff;
          font-weight: 300;
        }
        input[type="text"] {
          position: relative;
          font-size: 1.5vw;
          width: 100%;
          color: #fff;
          background: none;
          padding: 1.2vh 2vw;
          margin: 0.2vh 0;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid #fff;
          transition: 0.6s;
        }
        input[type="text"]:focus {
        }
        input[type="password"] {
          position: relative;
          font-size: 1.5vw;
          width: 100%;
          color: #fff;
          background: none;
          padding: 1.2vh 2vw;
          margin: 0.2vh 0;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid #fff;
          transition: 0.6s;
        }
        input[type="password"]::after {
        }
        .button-masuk {
          width: 100%;
          display: flex;
          margin-top: 4vh;
        }
        .not-have {
          margin-top: 4vh;
        }
        .not-have p {
          color: #fff;
          text-align: center;
          font-size: 1.4vw;
        }
        .not-have p a {
          color: #fff;
          text-decoration: underline;
        }
      `}</style>
      <img className="logo-bkd" src="/asset/daftar/BKD.png" />
      <img className="path1" src="/asset/daftar/Path -1.png" />
      <img className="path2" src="/asset/daftar/Path -2.png" />
      <img className="motoran" src="/asset/daftar/Group 1167.png" />
      <div className="container-login">
        <div
          style={{
            width: "100%",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <h1 className="title-text">
              Masuk <br /> Berkat Kasih Damai
            </h1>
          </p>
          <hr className="my-dvider" />
        </div>
        <div className="box-text">
          <p className="subtittle-text">
            Masuk dengan akun yang terdaftar di <br /> Berkat Kasih Damai
          </p>
        </div>
        <div className="form">
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div className="icon-text">
              <img
                src="/asset/daftar/Icon feather-user-1.png"
                // style={{ width: "1.4vw" }}
              />
            </div>
            <div className="label-text">
              <label for="email">Email</label>
            </div>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Masukkan Email"
          />
        </div>
        <div className="form">
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div className="icon-text">
              <img
                src="/asset/daftar/Icon feather-unlock-2.png"
                // style={{ width: "1.4vw" }}
              />
            </div>
            <div className="label-text">
              <label for="Password">Password</label>
            </div>
          </div>
          <img
            src="/asset/daftar/Icon feather-eye.png"
            style={{
              float: "right",
              position: "absolute",
              width: "2vw",
              right: "1vw",
              zIndex: 2,
              marginTop: "1vh",
              pointerEvents: "initial",
            }}
          />
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Masukkan Kata Sandi"
          />
        </div>
        <div className="button-masuk">
          <div>
            <a href="#">
              <img
                style={{ position: "relative", width: "35vw" }}
                src="/asset/daftar/Group -1.png"
              />
            </a>
          </div>
        </div>
        <div className="not-have">
          <p>
            Tidak Memiliki Akun? <a href="/daftar">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
