import { useEffect, useRef, useState } from 'react';
import './NoticeLine.scss';

function NoticeLine() {
  const noticeRef = useRef<HTMLUListElement>(null);
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    const noticeInterval = setInterval(() => {
      const children = noticeRef.current?.children;
      // 자식 노드가 없을 시
      if (!children) {
        clearInterval(noticeInterval); // 인터벌 제거 후
        return;
      }
      const currentIdx = idx;
      const maxIdx = children.length;
      const nextIdx = currentIdx + 1 >= maxIdx ? 0 : currentIdx + 1;
      const currentNode = children[idx];
      const nextNode = children[nextIdx];

      currentNode.classList.toggle('focus');
      nextNode.classList.toggle('focus');
      setIdx(nextIdx); // idx ++;
    }, 3000);

    return () => {
      clearInterval(noticeInterval);
    };
  });

  return (
    <section className="section-noticeLine-wrap">
      <div className="noticeLine-left">
        <div className="noticeLine-left-inner">
          <h2 className="notice">공지사항</h2>
          <ul className="notice_content" ref={noticeRef}>
            <li className="notice_content_item focus">
              시스템 개선 및 서비스 점검 안내
            </li>
            <li className="notice_content_item">
              스타벅스 푸드 구매 헤택 조정 안내
            </li>
            <li className="notice_content_item">
              스타벅스 푸드 구매 헤택 조정 안내
            </li>
            <li className="notice_content_item">
              스타벅스 푸드 구매 헤택 조정 안내
            </li>
          </ul>
          <p className="notice_detail_btn">
            <a href=" ">
              <img
                alt=" 공지사항 더 보기 버튼"
                src={`${process.env.PUBLIC_URL}/assets/plus.png`}
              />
            </a>
          </p>
        </div>
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
