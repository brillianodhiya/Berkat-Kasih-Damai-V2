import CardNews from "./cardnews";
import { useEffect, useState } from "react";
import { Button } from "antd";
import stylesheet from "antd/dist/antd.min.css";

// import SlideNews from "./SlideNews";

const News = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <section className="berita" id="berita">
        <div className="title">
          <h1>Berita</h1>
        </div>{" "}
        <div className="container">
          <CardNews
            img={"/asset/news_1.jpeg"}
            title="News 1"
            subtitle="More Info About News"
            desc="Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
            bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto
            kevin turducken."
          />
          <CardNews
            img={"/asset/news_2.jpeg"}
            title="News 2"
            subtitle="More Info About News"
            desc="Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
            bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto
            kevin turducken."
          />{" "}
          <CardNews
            img={"/asset/news_3.jpeg"}
            title="News 3"
            subtitle="More Info About News"
            desc="Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
          bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto
          kevin turducken."
          />
        </div>
      </section>
      <style jsx>
        {`
          .berita {
            position: relative;
            width: 100%;
            min-height: 60vh;
            background: #eef9ff;
          }

          .title {
            display: flex;
            align-items: center;
            width: 100%;
            align-contents: center;
            padding-top: 24px;
            padding-bottom: 36px;
          }

          .title h1 {
            font-weight: 500;
            font-size: 28px;
            width: 100%;
            text-align: center;
          }

          .container {
            display: flex;
            background: #eef9ff;
            align-items: center;
          }

          .container {
            width: 100%;
            display: flex;
            padding: 36px;
          }
        `}
      </style>
    </div>
  );
};

export default News;
