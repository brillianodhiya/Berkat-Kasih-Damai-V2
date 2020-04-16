const Testimonials = () => {
  return (
    <div>
      <section className="title-testimoni" id="testimoni">
        <div className="title">
          <h1>Testimoni</h1>
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
            min-height: 20vh;
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
            padding-top: 24px;
          }

          .title h1 {
            font-weight: 500;
            font-size: 28px;
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
            margin: 20px;
          }
          .container2 .box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 320px;
            height: 420px;
            margin: 20px;
            background: #eff8ff;
          }
          .container2 .box .content {
            padding: 30px;
            text-align: center;
          }
          .container2 .box .content .quote {
            max-width: 48px;
          }
          .container2 .box .content p {
            color: #617a8b;
            padding: 20px 0;
          }
          .container2 .box .user {
            max-width: 72px;
            border-radius: 50%;
          }
          .container2 .box .content h3 {
            color: #617a8b;
            text-transform: uppercase;
            font-size: 16px;
            letter-spacing: 1px;
            font-weight: 600;
          }
          @media (max-width: 1050px) {
            .container2 {
              justify-content: center;
            }
          }
          @media (max-width: 768px) {
            .container2 .box {
              width: 100%;
              height: auto;
              padding: 30px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
