import { useEffect, useRef, useState } from 'react';
import './Store.scss';

function Store() {
  const textRef01 = useRef<HTMLDivElement>(null);
  const textRef02 = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [tabText01Ani, setTabText01Ani] = useState<boolean>(false);
  const [tabText02Ani, setTabText02Ani] = useState<boolean>(false);
  const [tabBtnAni, setTabBtnAni] = useState<boolean>(false);

  const isTab = () => {
    if (window.innerWidth < 960) {
      return true;
    }
    return false;
  };
  const tabAnimation = (el: HTMLElement | null, browserHeight: number) => {
    const pos = el?.getBoundingClientRect().top;
    const height = el?.clientHeight;
    if (pos && height && pos - browserHeight < height) {
      return true;
    }
    return false;
  };

  const scrollHandler = () => {
    if (!isTab()) return;
    const browserHeight = window.innerHeight;
    const text01 = textRef01.current;
    const text02 = textRef02.current;
    const detailBtn = btnRef.current;

    if (tabAnimation(text01, browserHeight)) {
      setTabText01Ani(true);
    } else {
      setTabText01Ani(false);
    }
    if (tabAnimation(text02, browserHeight)) {
      setTabText02Ani(true);
    } else {
      setTabText02Ani(false);
    }
    if (tabAnimation(detailBtn, browserHeight)) {
      setTabBtnAni(true);
    } else {
      setTabBtnAni(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  return (
    <section className="section-store-wrap">
      <div className="store-inner">
        <div className="store_top_img" />
        <div className="store_visual_01" />
        <div className="store_visual_02" />
        <div className="store_bottom_img" />
        <div
          className={tabText01Ani ? 'store_text_01 slide' : 'store_text_01 '}
          ref={textRef01}
        >
          전국 어디에서나 스타벅스와 함께! 스타벅스와 함께 커피 한잔의 여유를
          가져보세요.
        </div>
        <div
          className={tabText02Ani ? 'store_text_02 slide' : 'store_text_02'}
          ref={textRef02}
        >
          나의 취향이 머무는 곳 스타벅스 리저브 매장 더욱 편리하게 스타벅스를
          만나보는 드라이브 스루 매장 함께해서 더 따뜻한 지역사회 소통 공간,
          커뮤니티 스토어까지 다양한 스타벅스 매장이 여러분을 기다립니다.
        </div>
        <div
          className={tabBtnAni ? 'btn_store_detail pop' : 'btn_store_detail'}
          ref={btnRef}
        >
          <a href=" ">매장 찾기</a>
        </div>
      </div>
    </section>
  );
}
export default Store;
