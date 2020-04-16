import Head from "next/head";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [changeLayanan, setLayanan] = useState(1);
  const [active, setActive] = useState(false);

  // console.log(headerClass)
  const handleScroll = (e) => {
    // console.log(e, "SCROLL");
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

  return (
    <div>
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
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#layanan1">Layanan</a>
          </li>
          <li>
            <a href="#galeri">Galeri</a>
          </li>
          <li>
            <a href="#berita">Berita</a>
          </li>
          <li>
            <a href="#testimoni">Testimoni</a>
          </li>
          <li>
            <a href="#masuk" className="masuk">
              <img src="/asset/Group_1164.png" />
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={() => setActive(!active)}></div>
      </header>

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
            padding: 10px 124px;
            background: #fff;
            border-bottom: 1px solid (0,0,0,.1);
            `
              : `padding: 20px 100px;`}
            z-index: 1000;
            transition: 0.6s;
          }

          .masuk img {
            position: relative;
            height: 76px;
            transition: 0.3s;
          }

          .masuk img:hover {
            height: 80px;
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
          }

          header .logo img {
            position: relative;
            ${headerClass === "sticky" ? `height: 116px; ` : `height: 124px;`}
            transition: 0.6s;
          }

          header ul {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 15px;
          }

          header ul li {
            position: relative;
            list-style: none;
          }

          header ul li a {
            position: relative;
            margin: 0 15px;
            text-decoration: none;
            color: #000;
            letter-spacing: 2px;
            font-weight: 300;
            transition: 0.6s;
            font-size: 32px;
          }
        `}
      </style>
      {/* responsive  */}
      <style jsx>
        {`
          .toggle {
            display: none;
          }

          @media (max-width: 992px) {
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
              padding: 5 50px;
              background: #fff;
            }
            header ul {
              position: absolute;
              top: 59px;
              left: 0;
              width: 100%;
              background: #fff;
              height: 100vh;
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
          }
        `}
      </style>
    </div>
  );
};

export default Header;
