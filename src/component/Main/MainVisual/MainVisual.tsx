import './MainVisual.scss';

function MainVisual() {
  return (
    <section className="main-visual-wrap">
      <div className="main-visual-inner">
        <div className="main-visual_slogan">
          <img
            className="pc-slogan"
            src={`${process.env.PUBLIC_URL}/assets/newyear_logo.png`}
            alt="Peak Holiday VIBES"
          />
        </div>
        <div className="btn_main_visual_slogan">
          <a href="./">자세히보기</a>
        </div>
        <div className="main-visual_set">
          <div className="set_common set_01">
            <img
              className="pc-drink"
              src={`${process.env.PUBLIC_URL}/assets/pcDrink1.png`}
              alt="푸른 용 클래식 밀크티 이미지"
            />
          </div>
          <div className="set_common set_02">
            <img
              className="pc-drink"
              src={`${process.env.PUBLIC_URL}/assets/pcDrink2.png`}
              alt="푸른 용 헤이즐넛 라떼 이미지"
            />
          </div>
          <div className="set_common set_03">
            <img
              className="pc-drink"
              src={`${process.env.PUBLIC_URL}/assets/pcDrink3.png`}
              alt="핑크 폼 딸기 라떼 이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainVisual;
