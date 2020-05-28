import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="desc">
          <div className="img-container">
            <img src="/asset/BKD_fix.png" />
          </div>
          <div className="detail">
            <p>
              Komunitas yang mewadahi orang-orang yang gemar melakukan traveling
              dan suka membantu untuk pertumbuhan pariwisata di tanah air
            </p>
          </div>
        </div>
        <div className="tentang">
          <h1>Tentang</h1>
          <div className="ul-container">
            <ul>
              <li>
                <a href="#beranda">Beranda</a>
              </li>{" "}
              <li>
                <a href="#informasi">Informasi</a>
              </li>{" "}
              <li>
                <a href="#galeri">Galeri</a>
              </li>{" "}
              <li>
                <a href="#program">Program</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#destinasi">Destinasi</a>
              </li>{" "}
              <li>
                <a href="#informasi">Open Donasi</a>
              </li>{" "}
              <li>
                <a href="#syarat">Syarat & Ketentuan</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="kontak">
          <h1>Kontak Kami</h1>
          <div className="ul-container">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=6281296399988&text=Hi..%20Berkat%20Kasih%20Damai&source=&data=&app_absent="
                >
                  <img src="/asset/wa.png" /> &nbsp; 0812-9639-9988
                </a>
              </li>{" "}
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/berkatkasihdamai/"
                >
                  <img src="/asset/ig.png" /> &nbsp; berkatkasihdamai
                </a>
              </li>{" "}
              <li>
                <a target="_blank" href="berkatkasihdamai@gmail.com">
                  <img src="/asset/email.png" /> &nbsp;
                  berkatkasihdamai@gmail.com
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
        {/* <div>
          <span className="title">
            <img src="/asset/BKD_fix.png" />
            Berkat Kasih Damai
          </span>
        </div>
        <div className="quick-link">
          <b>Quick Link</b>
          <a href="#profil">Profil</a>
          <a href="#layanan1">Layanan</a>
          <a href="#galery">Galery</a>
          <a href="#berita">Berita</a>
          <a href="#testimoni">Testimoni</a>
        </div>
        <div className="how-it-work">
          <b>How It Work?</b>
          <a href="#">Buat Akun</a>
          <a href="#">Open Donasi</a>
          <a href="#">Ajak Teman</a>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/asset/social-fb.png" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="/asset/social-twitter.png" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/asset/social-ig.png" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="/asset/social-linkin.png" />
          </a>
        </div> */}
      </div>
      <div className="copyright">
        <p>© Copyright Secure. All rights reserved 2020.</p>
      </div>
      {/* Icons made by{" "}
      <a
        href="https://www.flaticon.com/authors/pixel-perfect"
        title="Pixel perfect"
      >
        Pixel perfect
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a> */}
      <style jsx>
        {`
          @media (max-width: 992px) {
            a {
              font-size: 100% !important;
            }
            .img-container img {
              position: relative;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          a {
            font-size: 1.1vw;
          }
          footer {
            position: relative;
            width: 100%;
            min-height: 60vh;
            display: flex;
            background: #ffe35a;
            margin-top: 3.6vw;
          }
          footer .bg {
            width: 100%;
            position: absolute;
            z-index: -5;
          }
          footer .container {
            display: flex;
            width: 100%;
            padding-left: 5vw;
            padding-right: 5vw;
            justify-content: space-between;
          }
          .kontak {
            display: flex;
            width: 30%;
            padding-top: 0;
            height: 70%;
            position: relative;
            padding-left: 4vw;
            padding-right: 4vw;
            flex-direction: column;
            justify-content: center;
          }
          .kontak h1 {
            font-weight: 500;
            font-size: 2vw;
          }
          .kontak .ul-container {
            display: flex;
            width: 100%;
          }
          .kontak .ul-container ul {
            width: 100%;

            list-style-type: none;
          }
          .ul-container ul li a {
            color: #141640;
          }
          .tentang {
            display: flex;
            width: 40%;
            padding-top: 0;
            height: 70%;
            position: relative;
            padding-left: 4vw;
            padding-right: 4vw;
            flex-direction: column;
            justify-content: center;
          }
          .tentang h1 {
            font-weight: 500;
            font-size: 2vw;
          }
          .tentang .ul-container {
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .tentang .ul-container ul {
            width: 50%;

            list-style-type: none;
          }
          .ul-container ul li a {
            color: #141640;
          }
          .desc {
            display: flex;
            width: 30%;
            padding-top: 0;
            height: 70%;
            position: relative;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .desc .img-container {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .img-container img {
            position: relative;
            width: 30%;
            height: 100%;
          }
          .desc .detail {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .desc .detail p {
            width: 100%;
            font-size: 1.1vw;
            text-align: center;
          }
          .title {
            display: flex;
            align-items: center;
            align-contents: center;
          }
          .title img {
            width: 44px;
            transition: 0.6s;
            margin-right: 8px;
          }
          .quick-link {
            transition: 0.6s;
            display: flex;
            margin-top: 10px;
            flex-direction: column;
          }
          .quick-link b {
            margin-bottom: 12px;
          }
          .quick-link a {
            text-decoration: none;
            color: #000;
            transition: 0.6s;
            font-weight: 300;
          }
          .how-it-work {
            transition: 0.6s;
            display: flex;
            margin-top: 10px;
            flex-direction: column;
          }
          .how-it-work b {
            margin-bottom: 12px;
          }
          .how-it-work a {
            text-decoration: none;
            color: #000;
            transition: 0.6s;
            font-weight: 300;
          }
          .social {
            transition: 0.6s;
            margin-top: 4px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .social a {
            margin: 8px;
          }
          .social a img {
            width: 16px;
          }
          .copyright {
            position: absolute;
            bottom: 0;
            height: 4.5vw;
            width: 100%;
            background: #2f2f2f;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .copyright p {
            color: #fff;
            font-size: 1.2vw;
          }
          @media (max-width: 992px) {
            .copyright p {
              color: #fff;
              font-size: 100%;
            }
            .copyright {
              height: 40px;
            }
            footer .container {
              display: flex;
              width: 100%;
              padding-left: 5vw;
              padding-right: 5vw;
              flex-direction: column;
            }
            .kontak {
              margin-bottom: 40px;
            }
            footer .container div {
              width: 100%;
            }
            h1 {
              font-weight: 500;
              font-size: 34px !important;
            }
            p {
              font-size: 100% !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
