const Testimonials = () => {
  return (
    <div style={{ background: "#F9F9F9", marginTop: "8vw" }}>
      <section className="title-testimoni" id="testimoni">
        <div className="title">
          <h1>Mereka Sudah Merasakan Manfaatnya</h1>
        </div>
      </section>
      <section className="testimoni">
        <div className="container2">
          <div className="box">
            <div className="content">
              <img src="/asset/img.png" className="quote" />
              <p>
                Ea labore et aliquip sint velit. Do nulla esse adipisicing
                labore et ea sunt laborum fugiat voluptate ex deserunt
                exercitation.
              </p>
              <img src="/asset/user1.jpg" className="user" />
              <h3>John Doe</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="/asset/img.png" className="quote" />
              <p>
                {" "}
                Ea labore et aliquip sint velit. Do nulla esse adipisicing
                labore et ea sunt laborum fugiat voluptate ex deserunt
                exercitation.
              </p>
              <img src="/asset/user2.jpg" className="user" />
              <h3>John Doe</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="/asset/img.png" className="quote" />
              <p>
                Ea labore et aliquip sint velit. Do nulla esse adipisicing
                labore et ea sunt laborum fugiat voluptate ex deserunt
                exercitation.
              </p>
              <img src="/asset/user3.jpg" className="user" />
              <h3>John Doe</h3>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .title-testimoni {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .testimoni {
            position: relative;
            width: 100%;
            min-height: 60vh;
            display: flex;
            align-items: center;
          }

          .title {
            display: flex;
            align-items: center;
            width: 100%;
            align-contents: center;
            padding-top: 2vh;
          }

          .title h1 {
            font-weight: 500;
            font-size: 3vw;
            width: 100%;
            text-align: center;
          }

          .container2 {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-warp: wrap;
            margin: 2.2vw;
          }
          .container2 .box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25vw;
            height: 32vw;
            margin: 2vw;
            background: #eff8ff;
            box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 8px 0 rgba(0, 0, 0, 0.19);
          }
          .container2 .box .content {
            padding: 2.5vw;
            text-align: center;
          }
          .container2 .box .content .quote {
            max-width: 4vw;
          }
          .container2 .box .content p {
            color: #617a8b;
            padding: 2vw 0;
            font-size: 1.2vw;
          }
          .container2 .box .user {
            max-width: 7vw;
            border-radius: 50%;
          }
          .container2 .box .content h3 {
            color: #617a8b;
            text-transform: uppercase;
            font-size: 1.3vw;
            letter-spacing: 0.1vw;
            font-weight: 600;
          }

          @media (max-width: 1050px) {
            .container2 {
              justify-content: center;
            }
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 34px !important;
              text-align: left;
              font-weight: 500 !important;
            }
            p {
              font-size: 100% !important;
            }
            h3 {
              font-size: 100% !important;
            }
            .user {
              max-width: 70px !important;
            }
            .container2 .box {
              width: 100%;
              height: auto;
              padding: 30px 20px;
            }
            .container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
