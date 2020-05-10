import Header from "../components/Header2";
import Layout from "../components/layout";
import Footer from "../components/footer2";
import { Tabs, Affix } from "antd";
import stylesheet from "antd/dist/antd.min.css";

const { TabPane } = Tabs;

const Home = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
          height: 30vw !important;
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

        .ant-tabs-nav .ant-tabs-tab-active {
          color: #ef7f65 !important;
        }
        .ant-tabs-nav .ant-tabs-tab:hover {
          color: #ef7f65 !important;
        }

        .ant-tabs-ink-bar {
          background-color: #ef7f65 !important;
        }
        .ant-tabs-nav-container {
          font-size: 1.4vw !important;
        }

        .ant-tabs .ant-tabs-left-bar .ant-tabs-tab,
        .ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
          padding: 0.8vw 2.4vw !important;
        }

        .ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar,
        .ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
          width: 0.2vw !important;
        }

        .container2 {
          display: flex;
          min-height: 100vh;
          transition: 0.6s;
          align-items: center;
          padding-top: 20vh;
        }
        .showTabs {
          display: none !important;
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

          .ant-tabs-nav-container {
            font-size: 14px !important;
          }

          .ant-tabs .ant-tabs-left-bar .ant-tabs-tab,
          .ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
            padding: 8px 24px !important;
          }

          .ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar,
          .ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
            width: 2px !important;
          }

          .hideTabs {
            display: none !important;
          }
          .showTabs {
            display: block !important;
            margin-top: 15vh !important;
            margin-left: 10% !important;
            margin-right: 10% !important;
          }
          .container2 {
            align-items: flex-start !important;
            padding-top: 0 !important;
          }
        }
      `}
    </style>
    <Header />
    <section
      className="container2"
      style={{
        background: "#f9f9f9",
      }}
    >
      {/* <Affix> */}
      <Tabs
        className="hideTabs"
        defaultActiveKey="1"
        animated
        tabPosition="left"
      >
        <TabPane tab="Tentang Kami" key="1">
          <div style={{ padding: "2vw" }}>
            <p style={{ textAlign: "center", fontSize: "1.4vw" }}>
              <h2>Tentang Kami</h2>
              Membantu dengan cara berbagi dan beramal yang akan di berikan
              kepada masyarakat yang membutuhkan demi tujuan hidup yang mulia{" "}
              <br /> <br /> <br />
              <h2>Visi</h2>
              Membantu program pemerintah dalam pemberantasan kemiskinan dan
              membantu mensejahterakan orang-orang yang hidup dibawah kemiskinan
              <h2>Misi</h2>
              Membantu lembaga-lembaga kemanusiaan, baik perorangan atau Swasta.
              (panti asuhan,yatim piatu,cacat mental dll) yang benar-benar butuh
              bantuan
            </p>
          </div>
        </TabPane>
        <TabPane tab="Syarat & Ketentuan" key="2">
          <div style={{ padding: "2vw" }}>
            <p style={{ fontSize: "1.4vw" }}>
              <h2>Syarat & Ketentuan</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>1. Usia 17 th keatas.</li>
                <li>2. Berhati mulia, rela berkorban, mau peduli & berbagi.</li>
                <li>
                  3. Semangat kebersamaan & kesatuan yg tinggi tidak
                  bersungut-sungut dalam keadaan yg sulit.
                </li>
                <li>
                  4. Bayar uang amal & tour 10 jt (hanya 1x bayar ) bisa dicicil
                  3x :
                  <ul style={{ listStyleType: "none", marginLeft: "2vw" }}>
                    <li> - DP pendaftaran 3jt</li>
                    <li> - Cicilan ke ll 3jt sebelum 7 hr tour B</li>
                    <li>
                      - Cicilan ke lll 4 jt sebelum 7 hr tour C 5. Setiap kali
                      tour ke luar negri dapat uang saku.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </TabPane>
        <TabPane tab="Profit & Ketentuan" key="3">
          <div style={{ padding: "2vw" }}>
            <p style={{ fontSize: "1.4vw" }}>
              <h2>Profit & Ketentuan</h2>
              <ul style={{ listStyle: "none" }}>
                <li>1. Bonus Reﬀeral 5%</li>
                <li>
                  2. Membayar Lunas 10 jt, mendapat gratis tour A untuk satu
                  orang.
                </li>
                <li>
                  3. satu nama boleh mengambil tiga paket.
                  <ul style={{ listStyle: "none", marginLeft: "2vw" }}>
                    <li>* Bonus Reﬀeral tidak berlaku.</li>
                  </ul>
                </li>
                <li>
                  4. Tour International mendapat uang saku sebesar 2% dari harga
                  masing-masing Tour
                </li>
                <li>
                  5. Bonus Reward dalam satu bulan, mulai terhitung dari bulan
                  Oktober 2019 sbb:
                  <ul style={{ listStyle: "none", marginLeft: "2vw" }}>
                    <li>* Member 10 orang, mendapat bonus Reﬀeral 5%</li>
                    <li>* Member 20 orang ,mendapat bonus Reﬀeral</li>
                    <li>* Member 30 orang, mendapat bonus Reﬀeral</li>
                    <li>
                      * Bonus Reward tersebut dapat di Claim jika member sudah
                      membayar Lunas. Akumulasi Bonus Reﬀeral Dalam 1
                      Tahun,terhitung Dari Dp Pendaftaran Sbb:
                      <ul style={{ listStyle: "none", marginLeft: "2vw" }}>
                        <li>
                          * Member 50 orang mendapat bonus 25 gram Fine Gold
                        </li>
                        <li>
                          * Member 100 orang mendapat bonus 50 gram Fine Gold
                        </li>
                        <li>
                          * Member 200 orang mendapat bonus 100 gram Fine Gold
                        </li>
                        <li>
                          * Member 500 orang mendapat bonus 150 gram Fine Gold
                        </li>
                      </ul>
                    </li>
                    <li>
                      * Bonus satu tahun tersebut sudah bisa di dapat sewaktu
                      peserta sudah mencapai 1.200 peserta Reward dari Tour A
                      s/d Tour O dapat di tukar dengan sbb:
                      <ul style={{ listStyle: "none", marginLeft: "2vw" }}>
                        <li>* Bisa diwakili orang lain</li>
                        <li>* Tukar produk seharga 75% dari harga Tour</li>
                        <li>* Tukar cash 50% dari harga Tour.</li>
                        <li>
                          * 1 bulan dimuka harus ada pemberitahuan apabila mau
                          tukar bonus tersebut.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </TabPane>
      </Tabs>
      <Tabs className="showTabs" defaultActiveKey="1" animated>
        <TabPane tab="Tentang Kami" key="1">
          <div style={{ padding: "20px" }}>
            <p style={{ textAlign: "center", fontSize: "100%" }}>
              <h2>Tentang Kami</h2>
              Membantu dengan cara berbagi dan beramal yang akan di berikan
              kepada masyarakat yang membutuhkan demi tujuan hidup yang mulia{" "}
              <br /> <br /> <br />
              <h2>Visi</h2>
              Membantu program pemerintah dalam pemberantasan kemiskinan dan
              membantu mensejahterakan orang-orang yang hidup dibawah kemiskinan
              <h2>Misi</h2>
              Membantu lembaga-lembaga kemanusiaan, baik perorangan atau Swasta.
              (panti asuhan,yatim piatu,cacat mental dll) yang benar-benar butuh
              bantuan
            </p>
          </div>
        </TabPane>
        <TabPane tab="Syarat & Ketentuan" key="2">
          <div style={{ padding: "20px" }}>
            <p style={{ fontSize: "100%" }}>
              <h2>Syarat & Ketentuan</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>1. Usia 17 th keatas.</li>
                <li>2. Berhati mulia, rela berkorban, mau peduli & berbagi.</li>
                <li>
                  3. Semangat kebersamaan & kesatuan yg tinggi tidak
                  bersungut-sungut dalam keadaan yg sulit.
                </li>
                <li>
                  4. Bayar uang amal & tour 10 jt (hanya 1x bayar ) bisa dicicil
                  3x :
                  <ul style={{ listStyleType: "none", marginLeft: "20px" }}>
                    <li> - DP pendaftaran 3jt</li>
                    <li> - Cicilan ke ll 3jt sebelum 7 hr tour B</li>
                    <li>
                      - Cicilan ke lll 4 jt sebelum 7 hr tour C 5. Setiap kali
                      tour ke luar negri dapat uang saku.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </TabPane>
        <TabPane tab="Profit & Ketentuan" key="3">
          <div style={{ padding: "20px" }}>
            <p style={{ fontSize: "100%" }}>
              <h2>Profit & Ketentuan</h2>
              <ul style={{ listStyle: "none" }}>
                <li>1. Bonus Reﬀeral 5%</li>
                <li>
                  2. Membayar Lunas 10 jt, mendapat gratis tour A untuk satu
                  orang.
                </li>
                <li>
                  3. satu nama boleh mengambil tiga paket.
                  <ul style={{ listStyle: "none", marginLeft: "20px" }}>
                    <li>* Bonus Reﬀeral tidak berlaku.</li>
                  </ul>
                </li>
                <li>
                  4. Tour International mendapat uang saku sebesar 2% dari harga
                  masing-masing Tour
                </li>
                <li>
                  5. Bonus Reward dalam satu bulan, mulai terhitung dari bulan
                  Oktober 2019 sbb:
                  <ul style={{ listStyle: "none", marginLeft: "20px" }}>
                    <li>* Member 10 orang, mendapat bonus Reﬀeral 5%</li>
                    <li>* Member 20 orang ,mendapat bonus Reﬀeral</li>
                    <li>* Member 30 orang, mendapat bonus Reﬀeral</li>
                    <li>
                      * Bonus Reward tersebut dapat di Claim jika member sudah
                      membayar Lunas. Akumulasi Bonus Reﬀeral Dalam 1
                      Tahun,terhitung Dari Dp Pendaftaran Sbb:
                      <ul style={{ listStyle: "none", marginLeft: "20px" }}>
                        <li>
                          * Member 50 orang mendapat bonus 25 gram Fine Gold
                        </li>
                        <li>
                          * Member 100 orang mendapat bonus 50 gram Fine Gold
                        </li>
                        <li>
                          * Member 200 orang mendapat bonus 100 gram Fine Gold
                        </li>
                        <li>
                          * Member 500 orang mendapat bonus 150 gram Fine Gold
                        </li>
                      </ul>
                    </li>
                    <li>
                      * Bonus satu tahun tersebut sudah bisa di dapat sewaktu
                      peserta sudah mencapai 1.200 peserta Reward dari Tour A
                      s/d Tour O dapat di tukar dengan sbb:
                      <ul style={{ listStyle: "none", marginLeft: "20px" }}>
                        <li>* Bisa diwakili orang lain</li>
                        <li>* Tukar produk seharga 75% dari harga Tour</li>
                        <li>* Tukar cash 50% dari harga Tour.</li>
                        <li>
                          * 1 bulan dimuka harus ada pemberitahuan apabila mau
                          tukar bonus tersebut.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </TabPane>
      </Tabs>
      {/* </Affix> */}
    </section>
    <Footer />
  </div>
);

export default Home;
