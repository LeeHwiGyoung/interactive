import { useEffect, useRef, useState } from 'react';
import './Fav.scss';

function Fav() {
  const favRef = useRef<HTMLDivElement>(null); // fav-wrap
  const favTextRef = useRef<HTMLDivElement>(null); // fav-text-01
  const [animation, setAnimation] = useState<boolean>(false);

  const scrollHandler = () => {
    const scroll = window.scrollY;
    const favWrapTop = favRef.current?.offsetTop; // fav-wrap의 위치
    const favTextTop = favTextRef.current?.offsetTop; // fav-text-01의 위치
    const favTextHeight = favTextRef.current?.clientHeight;

    const browserSize = window.innerHeight; // 스크롤을 제외한 브라우저 세로
    if (
      favWrapTop &&
      favTextTop &&
      favTextHeight &&
      scroll + browserSize > favWrapTop + favTextTop + favTextHeight / 2
    ) {
      setAnimation(true);
      return;
    }
    setAnimation(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  return (
    <section className="section-fav-wrap" ref={favRef}>
      <div className="fav-inner">
        <div
          ref={favTextRef}
          className={animation ? 'fav-text-01 slide' : 'fav-text-01'}
        >
          pick your favorite
        </div>
        <div className={animation ? 'fav-text-02 slide' : 'fav-text-02'}>
          다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할 수
          있는 최상의 선택 음료, 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드,
          다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게 마음을
          전하는 가장 좋은 방법 스타벅스 카드
        </div>
        <div className="fav-image" />
        <div className="btn-fav-detail">
          <a href=" ">자세히 보기</a>
        </div>
      </div>
    </section>
  );
}

export default Fav;
