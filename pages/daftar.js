import * as React from "react";
import stylesheet from "antd/dist/antd.min.css";
import { Form, Input } from "antd";
import Head from "next/head";

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
        background: "#fff",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Head>
        <title>Berkat Kasih Damai</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          charSet="UTF-8"
        ></meta>
        <link rel="icon" href="/asset/BKD_fix.png" />
      </Head>
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
          width: 35vw;
          right: 10vw;
          bottom: 30vh;
        }
        .logo-bkd {
          position: absolute;
          top: 5vh;
          right: 5vh;
          width: 7vw;
        }
        .link-logo {
          position: absolute;
          z-index: 1000;
          top: 1vh;
          right: 1vw;
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
          border-top: 0.2vw solid #fff1ab;
          border-bottom: 0.2vw solid #fff1ab;
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
          color: #141640;
        }
        .subtittle-text {
          text-align: center;
          color: #141640;

          font-weight: 300;
          font-size: 1.5vw;
        }
        .form {
          margin-top: 5%;
        }
        label {
          font-size: 1.4vw;
          color: #141640;

          font-weight: 300;
          margin: 1vw;
        }
        .icon-text img {
          width: 1.4vw;
        }
        ::placeholder {
          color: #141640;

          font-weight: 300;
        }
        input[type="text"] {
          position: relative;
          font-size: 1.2vw;
          width: 100%;
          color: #141640;

          background: none;
          padding: 1.2vh 1vw;
          margin: 0.2vh 0;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid #141640;
          transition: 0.6s;
        }
        input[type="text"]:focus {
          border: none !important;
          border-bottom: 2px solid #141640 !important;
        }
        input[type="password"] {
          position: relative;
          font-size: 1.2vw;
          width: 100%;
          color: #141640;

          background: none;
          padding: 1.2vh 1vw;
          margin: 0.2vh 0;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid #141640;
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
          color: #141640;

          text-align: center;
          font-size: 1.2vw;
        }
        .not-have p a {
          color: #141640;

          text-decoration: underline;
        }
        .button-img {
          position: relative;
          width: 35vw;
        }
        @media (max-width: 768px) {
          .my-dvider {
            margin-top: 1vh;
            border-top: 2px solid #fff1ab;
            border-bottom: 2px solid #fff1ab;
            width: 50%;
            border-radius: 0.5vw;
            margin-right: 25%;
            margin-left: 25%;
          }
          .motoran {
            display: none;
          }
          .container-login {
            min-height: 90vh;
            width: 100%;
            left: 0;
            // background: #fff;
            top: 5vh;
            position: absolute;
            padding-top: 5vh;
            padding-bottom: 5vh;
            padding-left: 5vw;
            padding-right: 5vw;
          }
          .title-text {
            font-size: 150%;
            color: #141640;
          }
          .subtittle-text {
            text-align: center;
            color: #141640;

            font-weight: 300;
            font-size: 100%;
          }
          .form {
            margin-top: 5%;
          }
          label {
            font-size: 100%;
            color: #141640;

            font-weight: 300;
          }
          .icon-text img {
            width: 60%;
          }

          input[type="text"] {
            position: relative;
            font-size: 100%;
            width: 100%;
            color: #141640;

            background: none;
            padding: 1.2vh 1vw;
            margin: 0.2vh 0;
            box-sizing: border-box;
            border: none;
            border-bottom: 2px solid #141640;
            transition: 0.6s;
          }
          input[type="text"]:focus {
            border: none !important;
            border-bottom: 2px solid #141640 !important;
          }
          input[type="password"] {
            position: relative;
            font-size: 100%;
            width: 100%;
            color: #141640;

            background: none;
            padding: 1.2vh 1vw;
            margin: 0.2vh 0;
            box-sizing: border-box;
            border: none;
            border-bottom: 2px solid #141640;
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
            color: #141640;

            text-align: center;
            font-size: 100%;
          }
          .button-img {
            position: relative;
            width: 100%;
          }
          .logo-bkd {
            position: absolute;
            top: 5vh;
            right: 5vh;
            width: 100%;
          }
          .link-logo {
            position: absolute;
            z-index: 1000;
            width: 15%;
          }
        }
      `}</style>

      <a href="/" className="link-logo">
        <img className="logo-bkd" src="/asset/BKD_fix.png" />
      </a>
      <img className="path1" src="/asset/daftar/Path 3925.png" />
      <img className="path2" src="/asset/daftar/Path 3924.png" />
      <img className="motoran" src="/asset/daftar/Group 1168.png" />
      <div className="container-login">
        <div
          style={{
            width: "100%",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <h1 className="title-text">
              Daftar <br /> Berkat Kasih Damai
            </h1>
          </p>
          <hr className="my-dvider" />
        </div>
        {/* <div className="box-text">
            <p className="subtittle-text">
              Masuk dengan akun yang terdaftar di <br /> Berkat Kasih Damai
            </p>
          </div> */}
        <div className="form">
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div className="icon-text">
              <img
                src="/asset/daftar/Icon feather-user.png"
                // style={{ width: "1.4vw" }}
              />
            </div>
            <div className="label-text">
              <label>Email</label>
            </div>
          </div>
          <input
            type="text"
            id="email"
            autoComplete={false}
            autoCorrect={false}
            autoFocus={false}
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
                src="/asset/daftar/Icon feather-unlock.png"
                // style={{ width: "1.4vw" }}
              />
            </div>
            <div className="label-text">
              <label>Kata Sandi</label>
            </div>
          </div>
          {/* <img
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
          /> */}
          <input
            autoComplete={false}
            autoCorrect={false}
            autoFocus={false}
            type="password"
            id="Password"
            name="Password"
            placeholder="Masukkan Kata Sandi"
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
                src="/asset/daftar/Icon feather-unlock.png"
                // style={{ width: "1.4vw" }}
              />
            </div>
            <div className="label-text">
              <label>Ulangi Kata Sandi</label>
            </div>
          </div>
          {/* <img
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
          /> */}
          <input
            autoComplete={false}
            autoCorrect={false}
            autoFocus={false}
            type="password"
            id="Password"
            name="Password"
            placeholder="Masukkan Ulang Kata Sandi"
          />
        </div>
        <div className="button-masuk">
          <div>
            <a href="#">
              <img className="button-img" src="/asset/daftar/Group 1165.png" />
            </a>
          </div>
        </div>
        <div className="not-have">
          <p>
            Sudah Memiliki Akun BKD? <a href="/masuk">Masuk Sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
