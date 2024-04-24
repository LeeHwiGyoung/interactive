import { useEffect, useRef, useState } from 'react';
import './NoticeLine.scss';

interface NoticeLineProps {
  pop: boolean;
  isPop: React.Dispatch<React.SetStateAction<boolean>>;
}

function NoticeLine({ pop, isPop }: NoticeLineProps) {
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

      const currentIdx = idx; // 현재 자식 노드를 가르킬 idx
      const maxIdx = children.length; // 자식 노드의 전체 개수
      const nextIdx = currentIdx + 1 >= maxIdx ? 0 : currentIdx + 1; // 자식 노드의 다음 노드 현재 노드가 마지막인 경우 다음 노드를 0으로 설정
      const currentNode = children[idx]; // 현재 자식 노드 (focus를 없앨 노드)
      const nextNode = children[nextIdx]; // 다음 자식 노드 (focus를 추가할 노드)
      currentNode.classList.toggle('focus');
      nextNode.classList.toggle('focus');
      setIdx(nextIdx); // idx ++;
    }, 3000);
    return () => {
      clearInterval(noticeInterval); // 언마운트시 제거
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
        <button
          className="noticeLine_right_inner"
          type="button"
          onClick={() => isPop(!pop)}
        >
          <h2 className="promotion_title">스타벅스 프로모션</h2>
          <img
            className={pop ? 'promotion_close' : 'promotion_open'}
            src={
              pop
                ? `${process.env.PUBLIC_URL}/assets/up.png`
                : `${process.env.PUBLIC_URL}/assets/down.png`
            }
            alt="아래 화살표 이미지"
          />
        </button>
      </div>
    </section>
  );
}
export default NoticeLine;
