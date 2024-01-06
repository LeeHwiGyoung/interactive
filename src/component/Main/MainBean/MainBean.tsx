import { useEffect, useRef, useState } from 'react';
import './MainBean.scss';

function MainBean() {
  const mainBeanRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  const scrollHandler = () => {
    const scroll = window.scrollY;
    const mainBeanTop = mainBeanRef.current?.offsetTop; // mainBean의 시작위치
    const browserSize = window.innerHeight; // 스크롤을 제외한 브라우저 세로 길이
    if (mainBeanTop && scroll + browserSize > mainBeanTop) {
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
    <section className="section-mainbean-wrap" ref={mainBeanRef}>
      <div className="mainbean-inner">
        <div
          className={
            animation ? 'mainbean-imgwrap left-slide' : 'mainbean-imgwrap'
          }
        >
          <img
            className="pc-bean"
            alt="과테말라 까시 씨엘로 250g 이미지"
            src={`${process.env.PUBLIC_URL}/assets/pc_bean.png`}
          />
        </div>
        <div
          className={
            animation ? 'mainbean-text-conf right-slide' : 'mainbean-text-conf'
          }
        >
          <img
            className="pc-mainbean-text"
            src={`${process.env.PUBLIC_URL}/assets/pc_bean_text.png`}
            alt="과테말라, 그중에서도 고지대로 품질 좋은 커피를 재배하는 안티구아 벨리에서 자라난 우아한 꽃향기 가득한 원두를 소개합니다."
          />

          <div className="btn-mainbean">
            <a href=" ">자세히보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MainBean;
