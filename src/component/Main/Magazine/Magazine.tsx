import './Magazine.scss';

function Magazine() {
  return (
    <section className="section-magazine-wrap">
      <div className="magazine-inner">
        <div className="magazine-title">
          <img
            className="pc-magazine-title"
            src={`${process.env.PUBLIC_URL}/assets/magazine_text_pc.png`}
            alt="리저브 매거진 함께 깊어가는 가을을 즐겨보세요."
          />
        </div>
        <div className="magazine-visual">
          <img
            className="pc-magazine-visual"
            src={`${process.env.PUBLIC_URL}/assets/magazine_visual_pc.png`}
            alt=""
          />
          <img
            className="tab-magazine-visual"
            src={`${process.env.PUBLIC_URL}/assets/tab_magazine_visual.jpg`}
            alt=""
          />
        </div>
        <div className="btn-magazine-wrap">
          <a href=" ">자세히 보기</a>
        </div>
      </div>
    </section>
  );
}

export default Magazine;
