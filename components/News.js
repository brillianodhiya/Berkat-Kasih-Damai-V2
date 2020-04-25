import { useEffect, useState } from "react";
import { List, Avatar, Icon } from "antd";
import stylesheet from "antd/dist/antd.min.css";

const News = () => {
  const data = [
    {
      id: 1,
      title: "Outbond Melewati Sungai",
      desc:
        "Kegiatan Traveling dengan keseruan menaiki mobil trail dan melewati sungai",
      tag: "Mobil Trail",
      img: "/asset/gallery3.jpeg",
    },
    {
      id: 2,
      title: "Foto Bersama",
      desc: "Menyempatkan foto bersama untuk Berkat Kasih Damai",
      tag: "Objek Wisata Batu Alien",
      img: "/asset/gallery1.jpeg",
    },
    {
      id: 3,
      title: "Objek Wisata Omahku Memoriku",
      desc:
        "Didalamnya terdapat museum yang sangat menarik sebagai sarana belajar sejarah",
      tag: "Mobil Trail",
      img: "/asset/gallery2.jpeg",
    },
    // {
    //   id: 4,
    //   title: "Outbond Melewati Sungai",
    //   desc:
    //     "Kegiatan Traveling dengan keseruan menaiki mobil trail dan melewati sungai",
    //   tag: "Mobil Trail",
    //   img: "/asset/gallery4.jpeg",
    // },
    // {
    //   id: 5,
    //   title: "Foto Bersama",
    //   desc: "Menyempatkan foto bersama untuk Berkat Kasih Damai",
    //   tag: "Objek Wisata Batu Alien",
    //   img: "/asset/gallery5.jpeg",
    // },
    // {
    //   id: 6,
    //   title: "Objek Wisata Omahku Memoriku",
    //   desc:
    //     "Didalamnya terdapat museum yang sangat menarik sebagai sarana belajar sejarah",
    //   tag: "Mobil Trail",
    //   img: "/asset/gallery6.jpeg",
    // },
  ];
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <section className="berita" id="galeri">
        <div className="title">
          <h1>Kegiatan Berkat Kasih Damai</h1>
        </div>{" "}
        <p className="subtitle">
          Foto dokumentasi keseruan teman - teman ketika waktu Traveling
        </p>
        <div className="content-galery">
          <List
            itemLayout="vertical"
            size="small"
            pagination={false}
            // pagination={{
            //   onChange: (page) => {
            //     console.log(page);
            //   },
            //   pageSize: 3,
            //   size: "small",
            // }}
            dataSource={data}
            renderItem={(item, index) => {
              if (index % 2 === 0) {
                return (
                  <List.Item
                    className="list-gallery"
                    key={item.id}
                    extra={
                      <img className="img-logo" alt="logo" src={item.img} />
                    }
                  >
                    <List.Item.Meta
                      title={
                        <a href="#">
                          <h2>{item.title}</h2>
                        </a>
                      }
                      description={
                        <p>
                          {item.desc} <br /> # {item.tag}
                        </p>
                      }
                    />
                  </List.Item>
                );
              } else {
                return (
                  <List.Item
                    key={item.id}
                    extra={
                      <img className="img-logo" alt="logo" src={item.img} />
                    }
                  >
                    <List.Item.Meta
                      title={
                        <a href="#">
                          <h2>{item.title}</h2>
                        </a>
                      }
                      description={
                        <p>
                          {item.desc} <br /> # {item.tag}
                        </p>
                      }
                    />
                  </List.Item>
                );
              }
            }}
          />
        </div>
      </section>
      <style jsx>
        {`
          @media (max-width: 992px) {
            .berita {
              padding: 10% !important;
              width: 100% !important;
            }
            .img-logo {
              width: 200px !important;
            }
            h1 {
              text-align: left !important;
              font-size: 34px !important;
              font-weight: 500 !important;
            }
            p {
              text-align: left !important;
              font-size: 100% !important;
            }
            .berita .title {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            h2 {
              font-size: 100% !important;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .img-logo {
            width: 20vw;
          }
          h2 {
            font-size: 1.2vw;
          }
          .content-galery {
            padding-left: 11%;
            padding-right: 11%;
            padding-top: 8vh;
          }
          .berita {
            position: relative;
            width: 100%;
            min-height: 100vh;
          }

          .berita .subtitle {
            text-align: center;
            font-size: 1.4vw;
          }

          .title {
            padding-top: 5vw;
            display: flex;
            align-items: center;
            width: 100%;
            align-contents: center;
          }

          .title h1 {
            margin: 0;
            font-weight: 500;
            font-size: 3vw;
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
