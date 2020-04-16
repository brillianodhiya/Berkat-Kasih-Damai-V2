const Banner2 = () => {
  return (
    <div>
      <section className="banner2">
        <img className="square-path" src="/asset/icon.png" />
      </section>
      <style jsx>
        {`
          .banner2 {
            position: relative;
            width: 100%;
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default Banner2;
