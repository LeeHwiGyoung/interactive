import './NoticeLine.scss';

function NoticeLine() {
  return (
    <section className="section-noticeLine-wrap">
      <div className="noticeLine-left">
        <dl className="noticeLine-left-inner">
          <dt className="notice-news">공지사항</dt>
          <dd className="notice-news-items">
            <ul className="notice-new-item">
              <li>공지1</li>
              <li>공지2</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="noticeLine-right">
        <button type="button">
          <p>스타벅스 프로모션</p>
        </button>
      </div>
    </section>
  );
}
export default NoticeLine;
