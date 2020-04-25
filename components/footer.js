import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer>
      <img className="bg" src="/asset/footer.png" />
      <div className="container">
        <div>
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
        </div>
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
          footer {
            position: relative;
            width: 100%;
            min-height: 50vh;
            display: flex;
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
            padding-left: 20vw;
            padding-right: 20vw;
            padding-top: 8vh;
            justify-content: space-between;
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
            bottom: 16px;
            margin-left: 20vw;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
