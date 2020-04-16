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
          <img className="dot-dot" src="/asset/illustration.png" />
        </div>
        <img className="hiro-path" src="/asset/Group_1161.png" />
        <br />
        {/* <img className="path1" src="/asset/Path_3677.png" /> */}
        <img className="path2" src="/asset/Path_3550.png" />
      </section>
      <section className="banner2" id="profil">
        <img className="square-path" src="/asset/icon.png" />
        <img className="center-square" src="/asset/Path_3549.png" />
      </section>
      {/* <section className="banner3"></section> */}
      <style jsx global>
        {`
          .banner {
            position: relative;
            width: 100%;
            min-height: 110vh;
            display: flex;
            align-items: center;
            padding-left: 120px;
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
              
              width: 288px;
              `
              : `
              width: 200px;
            
            `}
            z-index: 1;
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
            padding: 64px;
              `
              : `
              padding: 48px;
            
              `}
            width: 748vh;
            transition: 0.6s;
          }

          .banner .banner-text h1 {
            font-weight: 500;
            font-size: 64px;
          }

          .banner .banner-text p {
            font-size: 32px;
          }

          .banner2 .square-path {
            position: absolute;
            width: 100%;
            z-index: 1;
          }

          .banner .hiro-path {
            width: 50%;
            ${hiroAnim === "sides"
              ? `
            padding-top: 112px;
            padding-right: 112px;
            `
              : `
            padding-top: 148px;
            padding-right: 48px;
            `}
            z-index: -1;
            transition: 0.6s;
          }

          .banner .banner-text .dot-dot {
            position: absolute;
            top: -180px;
            left: 10px;
            z-index: -1;
            width: 110%;
          }

          .banner .path1 {
            position: absolute;
            width: 120px;
            top: 10px;
          }

          .banner .path2 {
            position: absolute;
            height: 300px;
            top: 10px;
            right: 5px;
          }

          .banner .banner-text .daftar .daftarbutton {
            position: relative;
            height: 128px;
            transition: 0.3s;
          }
          .banner .banner-text .daftar .daftarbutton:hover {
            height: 132px;
            transition: 0.3s;
          }
        `}
      </style>
      <style jsx>
        {`
          @media (max-width: 992px) {
            .banner .hiro-path {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
