import { useState, useEffect } from "react";

const About = () => {
  const [hiroAnim, setHiroAnim] = useState("");
  const [animation2, setAnimation2] = useState("");

  const handleScroll = (e) => {
    // console.log(window.scrollY);
    // setHiroAnim(window.scrollY);
    if (window.scrollY > 200) {
      setAnimation2("play");
    } else {
      setAnimation2("");
    }
    console.log(window.scrollY);
    if (window.scrollY > 240) {
      // console.log("About", e);
      setHiroAnim("sides");
    } else {
      setHiroAnim("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      {/* <section className="sec">
        <div className="content">
          <img className="layanan-detail" src="/asset/core_feature.png" />
        </div>
      </section> */}
      <section className="sec2" id="intro">
        <img className="left-circle" src="/asset/Illustration-1.png" />
        <div className="content2">
          <div className="banner-text2">
            <h1>Berbagi dan Beramal</h1> <br />
            <p>
              Membantu dengan cara berbagi dan beramal yang akan di berikan
              kepada masyarakat yang membutuhkan demi tujuan hidup yang mulia
            </p>
            <br />
            <a className="open-donasi" href="#">
              <span>
                <p>Buka Donasi</p>
                <img className="open-button" src="/asset/Rectangle_550.png" />
              </span>
            </a>
          </div>
          <div className="hiro-banner">
            <span>
              <img className="hiro-banner-bg" src="/asset/Illustration-3.png" />
              <img
                className="hiro-banner1"
                src="/asset/undraw_gifts_btw0.png"
              />
            </span>
          </div>
        </div>
      </section>
      <section className="sec3" id="layanan2">
        <div className="content3">
          <div className="content3_1">
            <span>
              <img
                className="img-destination"
                src="/asset/undraw_destinations_fpv7.png"
              />
              <img
                className="img-destination-bg"
                src="/asset/Illustration-3.png"
              />
            </span>
          </div>
          <img className="right-circle" src="/asset/Illustration-1.png" />
          <div className="content3_2">
            <div className="banner-text3">
              <h1>Benefit Lainnya</h1> <br />
              <p>
                Mendapatkan voucher gratis tour ke berbagai tempat <br />{" "}
                Membantu menjual roduk UKM <br /> Mendapatkan pasif income dan
                bonus yang menguntungkan
              </p>
              <br />
              <a className="open-donasi2" href="#">
                <span>
                  <p>Syarat & Ketentuan</p>
                  <img className="open-button" src="/asset/Rectangle_550.png" />
                </span>
              </a>
              <br />
              <img
                className="hiro-sec3"
                src="/asset/undraw_traveling_t8y2.png"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          h1 {
            font-size: 36px;
            font-weight: 500;
          }
          @-moz-keyframes spin {
            100% {
              -moz-transform: rotate(360deg);
            }
          }
          @-webkit-keyframes spin {
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes spin {
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }

          .sec {
            background: #fff;
            display: flex;
            ${animation2 === "play"
              ? `
            margin-top: 180px;
            
            `
              : `
            
            `}
            justify-content: center;
            transition: 0.6s;
          }
          .sec .content {
            position: relative;
            width: 100%;
          }
          .sec2 {
            display: flex;
            min-height: 100vh;
            justify-content: center;
            transition: 0.6s;
            align-items: center;
          }
          .sec2 .content2 {
            position: relative;
            width: 100%;
            z-index: 2;
            display: flex;
          }
          .sec3 {
            overflow: hidden;
            display: flex;
            justify-content: center;
            transition: 0.6s;
            min-height: 80vh;
          }
          .sec3 .content3 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .sec3 .content3 .content3_1 {
            width: 50%;
            padding-left: 64px;
            position: relative;
          }
          .sec3 .content3 .content3_1 span {
            display: flex;
            position: relative;
          }
          .sec3 .hiro-sec3 {
            float: right;
            width: 40%;
          }
          .right-circle {
            position: absolute;
            z-index: -1;
            width: 40%;
            right: -200px;
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
          }
          .content3_1 span .img-destination {
            position: relative;
            width: 70%;
          }
          .content3_1 span .img-destination-bg {
            position: absolute;
            width: 45%;
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
            z-index: -1;
          }
          .sec3 .content3 .content3_2 {
            padding: 24px;
            position: relative;
          }
          .content3 .content3_2 .banner-text3 {
            transition: 0.6s;
          }
          .content3 .content3_2 .banner-text3 h1 {
            font-weight: 500;
            font-size: 36px;
          }
          .content3 .content3_2 .banner-text3 p {
            font-size: 18px;
          }
          .sec2 .content2 .banner-text2 {
            padding: 100px;
            ${hiroAnim === "sides"
              ? `
            width: 65%;`
              : `
              
              width: 40%;`}
            transition: 2s;
          }
          .sec2 .content2 .banner-text2 h1 {
            font-weight: 500;
            font-size: 36px;
          }
          .sec2 .content2 .banner-text2 p {
            font-size: 18px;
          }
          .content2 .hiro-banner {
            width: 35%;
            padding-right: 50px;
            padding-top: 50px;
          }
          .content2 .hiro-banner span {
            width: 100%;
            displat: flex;
            overflow: hidden;
          }
          .content2 .hiro-banner .hiro-banner1 {
            width: 100%;
          }
          .content2 .hiro-banner .hiro-banner-bg {
            z-index: -1;
            width: 29%;
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
            position: absolute;
          }
          .open-donasi span p {
            position: absolute;
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 8px;
          }
          .open-donasi2 span p {
            position: absolute;
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 16px;
          }
          .open-donasi2 span img {
            width: 40%;
          }
          .sec2 .left-circle {
            position: absolute;

            ${hiroAnim === "sides"
              ? `
            width: 40%;
            left: -200px;
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
              `
              : `
              width: 80%;

            `}
            z-index: 1;
            transition: 1s;
          }
          .sec .content .layanan-detail {
            position: absolute;
            width: 100%;
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
};

export default About;
