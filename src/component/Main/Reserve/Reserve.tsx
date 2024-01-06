import './Reserve.scss';

function Reserve() {
  return (
    <section className="section-reserve-wrap">
      <div className="reserve-inner">
        <div className="reserve-title">
          <img
            className="pc-reserve-title"
            src={`${process.env.PUBLIC_URL}/assets/reserve_title.png`}
            alt="Notes of bittersweet Chocolate & Red Grape"
          />
        </div>
        <div className="detail-reserve-wrap">
          <div className="btn_reserve">
            <a href=" "> 자세히 보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reserve;
