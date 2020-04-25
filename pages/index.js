import Header from "../components/Header";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import About from "../components/About";
import News from "../components/News";
import Testimoni from "../components/Testimonials";
import Daftar from "../components/Daftar";
import Footer from "../components/footer";

const Home = () => (
  <Layout>
    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,800,900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Roboto";
          color: #141640;
        }

        html {
          scroll-behavior: smooth;
        }

        .ant-modal {
          width: 50vw !important;
        }
        .list-gallery .ant-list-item-main {
          order: 2 !important;
        }
        .list-gallery .ant-list-item-extra {
          order: 1 !important;
          margin-right: 40px !important;
          margin-left: 0 !important;
        }
        .ant-list-vertical .ant-list-item-main {
          margin-left: 8vw;
          margin-top: 3vw;
        }
        @media (max-width: 992px) {
          .list-gallery .ant-list-item-main {
            order: 1 !important;
          }
          .list-gallery .ant-list-item-extra {
            order: 2 !important;
            margin-left: 40px !important;
          }
          .ant-list-vertical .ant-list-item-main {
            margin-left: 0;
            margin-top: 0;
          }
        }
      `}
    </style>
    <Header />
    <Banner />
    <About />
    <News />
    <Testimoni />
    {/* <Banner2 /> */}
    <Daftar />
    <Footer />
  </Layout>
);

export default Home;
