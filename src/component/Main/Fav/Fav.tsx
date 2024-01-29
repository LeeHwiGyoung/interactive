import { useEffect, useRef, useState } from 'react';
import './Fav.scss';

function Fav() {
  const favRef = useRef<HTMLDivElement>(null); // fav-wrap
  const pcfavTextRef = useRef<HTMLDivElement>(null); // pc-fav-text-01
  const tabFavTextRef01 = useRef<HTMLDivElement>(null); // tab-fav-text-01
  const tabFavTextRef02 = useRef<HTMLDivElement>(null); // tab-fav-text-02
  const tabDetailBtn = useRef<HTMLDivElement>(null); // detail-Btn
  const [pcAnimation, setPcAnimation] = useState<boolean>(false);
  const [tabText01Ani, setTabText01Ani] = useState<boolean>(false);
  const [tabText02Ani, setTabText02Ani] = useState<boolean>(false);
  const [tabDetailBtnAni, setTabDetailBtnAni] = useState<boolean>(false);

  const checkTab = () => {
    // 960px 이상이면 false 리턴
    const browserWidth = window.innerWidth;
    if (browserWidth > 960) {
      return false;
    }
    return true;
  };

  const tabPop = (el: null | HTMLElement, browserHeight: number) => {
    // 뷰포트와의 상대적 위치에 따라
    const pos = el?.getBoundingClientRect().top;
    const height = el?.clientHeight;
    if (pos && height && pos - browserHeight < -height) {
      return true;
    }
    return false;
  };

  const pcSlide = (
    // 스크롤 위치 사용
    scroll: number,
    favWrapTop: number | undefined,
    browserHeight: number,
  ) => {
    const pcFavTextTop = pcfavTextRef.current?.offsetTop; // fav-text-01의 위치
    const pcFavTextHeight = pcfavTextRef.current?.clientHeight;
    if (
      favWrapTop &&
      pcFavTextTop &&
      pcFavTextHeight &&
      scroll + browserHeight > favWrapTop + pcFavTextTop + pcFavTextHeight / 2
    ) {
      setPcAnimation(true);
      return;
    }
    setPcAnimation(false);
  };

  const scrollHandler = () => {
    const scroll = window.scrollY;
    const favWrapTop = favRef.current?.offsetTop; // fav-wrap의 위치
    const browserHeight = window.innerHeight; // 스크롤을 제외한 브라우저 세로
    if (checkTab()) {
      const tabFavText01 = tabFavTextRef01.current;
      const tabFavText02 = tabFavTextRef02.current;
      const tabBtn = tabDetailBtn.current;
      if (tabPop(tabFavText01, browserHeight)) {
        setTabText01Ani(true);
      } else {
        setTabText01Ani(false);
      }
      if (tabPop(tabFavText02, browserHeight)) {
        setTabText02Ani(true);
      } else {
        setTabText02Ani(false);
      }
      if (tabPop(tabBtn, browserHeight)) {
        setTabDetailBtnAni(true);
      } else {
        setTabDetailBtnAni(false);
      }
    } else {
      pcSlide(scroll, favWrapTop, browserHeight);
    }
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
          ref={pcfavTextRef}
          className={pcAnimation ? 'pc-fav-text-01 slide' : 'pc-fav-text-01'}
        >
          pick your favorite
        </div>
        <div
          ref={tabFavTextRef01}
          className={tabText01Ani ? 'tab-fav-text-01 pop' : 'tab-fav-text-01'}
        >
          pick your favorite
        </div>

        <div
          className={pcAnimation ? 'pc-fav-text-02 slide' : 'pc-fav-text-02'}
        >
          다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할 수
          있는 최상의 선택 음료, 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드,
          다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게 마음을
          전하는 가장 좋은 방법 스타벅스 카드
        </div>
        <div
          ref={tabFavTextRef02}
          className={tabText02Ani ? 'tab-fav-text-02 pop' : 'tab-fav-text-02'}
        >
          다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할 수
          있는 최상의 선택 음료, 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드,
          다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게 마음을
          전하는 가장 좋은 방법 스타벅스 카드
        </div>
        <div className="fav-image" />
        <div
          className={tabDetailBtnAni ? 'btn-fav-detail pop' : 'btn-fav-detail'}
          ref={tabDetailBtn}
        >
          <a href=" ">자세히 보기</a>
        </div>
      </div>
    </section>
  );
}

export default Fav;
