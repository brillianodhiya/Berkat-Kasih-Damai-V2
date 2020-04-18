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

        body {
          min-height: 1000px;
        }

        html {
          scroll-behavior: smooth;
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
