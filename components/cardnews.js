const CardNews = ({ img, title, subtitle, desc }) => {
  return (
    <div>
      <div className="tile">
        <img src={img} />
        <div className="text">
          <h1>{title}</h1>
          <h2 className="animate-text">{subtitle}</h2>
          <p className="animate-text">{desc}</p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .tile {
            width: 320px;
            height: 320px;
            margin-right: 36px;
            margin-left: 36px;
            background-color: #99aeff;
            display: inline-block;
            background-size: cover;
            position: relative;
            cursor: pointer;
            transition: all 0.4s ease-out;
            box-shadow: 0px 16px 24px -17px rgba(0, 0, 0, 0.44);
            overflow: hidden;
            color: white;
            border-radius: 32px;
          }
          .tile img {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            transition: all 0.4s ease-out;
          }
          .tile .text {
            /*   z-index:99; */
            position: absolute;
            padding: 30px;
            height: calc(100% - 60px);
          }
          .tile h1 {
            font-weight: 300;
            margin: 0;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          }
          .tile h2 {
            font-weight: 100;
            margin: 20px 0 0 0;
            font-style: italic;
            transform: translateX(200px);
          }
          .tile p {
            font-weight: 300;
            margin: 20px 0 0 0;
            line-height: 25px;
            /*   opacity:0; */
            transform: translateX(-200px);
            transition-delay: 0.2s;
          }
          .animate-text {
            opacity: 0;
            transition: all 0.6s ease-in-out;
          }
          .tile:hover {
            /*   background-color:#99aeff; */
            box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
            transform: scale(1.05);
          }
          .tile:hover img {
            opacity: 0.2;
          }
          .tile:hover .animate-text {
            transform: translateX(0);
            opacity: 1;
          }
          .dots {
            position: absolute;
            right: 30px;
            margin: 0 auto;
            width: 30px;
            height: 30px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }

          .dots span {
            width: 5px;
            height: 5px;
            background-color: currentColor;
            border-radius: 50%;
            display: block;
            opacity: 0;
            transition: transform 0.4s ease-out, opacity 0.5s ease;
            transform: translateY(30px);
          }

          .tile:hover span {
            opacity: 1;
            transform: translateY(0px);
          }

          .dots span:nth-child(1) {
            transition-delay: 0.05s;
          }
          .dots span:nth-child(2) {
            transition-delay: 0.1s;
          }
          .dots span:nth-child(3) {
            transition-delay: 0.15s;
          }

          @media (max-width: 1000px) {
            .wrap {
              flex-direction: column;
              width: 400px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardNews;
