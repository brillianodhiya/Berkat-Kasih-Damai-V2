import { useState, useEffect } from "react";

const Banner = () => {
  const [hiroAnim, setHiroAnim] = useState("");

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

  return (
    <div>
      <section className="banner">
        <div className="banner-text">
          <img className="dot-dot" src="/asset/illustration.png" />

          <h1>
            Komunitas <br />
            Berkat Kasih Damai
          </h1>
          <p>
            Komunitas yang mewadahi orang-orang yang gemar melakukan traveling
            dan suka membantu untuk pertumbuhan pariwisata di tanah air
          </p>
          <br />
          <a className="daftar" href="#">
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
              top: 10%;
              z-index: 2;
            }
            .banner .banner-text .dot-dot {
              display: none !important;
            }
            .banner .banner-text {
              position: relative;
              padding: 14%;

              width: 100%;
              transition: 0.6s;
            }
            .banner2 .center-square {
              ${hiroAnim === `sides`
                ? `
                
                width: 210px;
                `
                : `
                width: 200px;
              
              `}
              z-index: 5;
              left: 40%;
              transition: 0.6s;
              position: absolute;
            }
            .banner {
              position: relative;
              width: 100%;
              min-height: 100vh !important;
              display: flex;
              overflow: hidden;
            }
            .banner .banner-text h1 {
              font-weight: 500;
              font-size: 34px;
            }
            .banner .banner-text p {
              font-size: 100%;
              font-weight: 100;
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
            padding-left: 13%;
              `
              : `
              padding-left: 11%;
            
              `}
            width: 748vh;
            transition: 0.6s;
            z-index: 10;
          }

          .banner .banner-text h1 {
            font-weight: 500;
            font-size: 3vw;
          }

          .banner .banner-text p {
            font-size: 1.4vw;
            font-weight: 100;
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
            z-index: -5;
            width: 110%;
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
