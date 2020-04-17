import { useState } from "react";

const Daftar = () => {
  const [modal, ShowModal] = React.useState(false);
  return (
    <div>
      {/* <Button>TESTT</Button> */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => ShowModal(!modal)}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
      <section className="daftar">
        <div className="left-text">
          <h1>Daftar Komunitas Berkat Aksi Damai</h1>
          Bergabunglah Bersama kami untuk meningkatkan jiwa sosial kita dengan
          menanam rasa peduli, tulus, rela serta berhati mulia berbagi berkah
          kesesama yang lemah dan orang yang hidupnya masih memiliki kekurangan
        </div>
        <div className="right-text">
          <a onClick={() => ShowModal(!modal)}>
            <img src="/asset/Subscribe.png" />
          </a>
        </div>
      </section>

      <style jsx>{`
        .daftar {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding-left: 116px;
          padding-right: 116px;
        }
        .left-text {
          width: 70%;
        }
        .left-text h1 {
          font-weight: 500;
          font-size: 28px;
        }
        .right-text {
          padding: 24px;
        }
        .right-text img {
          width: 250px;
          transition: 0.6s;
        }
        .right-text img:hover {
          width: 280px;
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
