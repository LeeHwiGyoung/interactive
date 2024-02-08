import DropDownContent from '../DropDownContent/DropDownContent';
import './PcNav.scss';

function PcNav() {
  return (
    <div className="nav_wrap">
      <div className="nav_inner">
        <h1 className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
        </h1>
        <nav className="util_nav">
          <ul>
            <li className="util_nav_item1">Sign In</li>
            <li className="util_nav_item2">My Starbucks</li>
            <li className="util_nav_item3">Customer Service & Ideas</li>
            <li className="util_nav_item4">Find a Store</li>
          </ul>
        </nav>
        <p className="search"> 통합검색</p>
      </div>
      <nav className="sub_gnb_nav">
        <div className="sub_gnb_nav_inner">
          <ul className="sub_gnb_nav_item">
            <li className="sub_gnb_nav_item1">
              <h2>COFFEE</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">커피</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 원두</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 비아</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스앳홈 by 캡슐</a>
                  </li>
                  <li>
                    <a href=" ">나와 어울리는 커피</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">커피 이야기</a>
                  </li>
                  <li>
                    <a href=" ">농장에서 우리의 손으로</a>
                  </li>
                  <li>
                    <a href=" ">최상의 아라비카 원두</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 로스트 스펙트럼</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 디카페인</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">스타벅스 리저브</a>
                  </li>
                  <li>
                    <a href=" ">RESERVE MAGAZINE</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">에스프레소 음료</a>
                  </li>
                  <li>
                    <a href=" ">도피오</a>
                  </li>
                  <li>
                    <a href=" ">에스프레소 마키아또</a>
                  </li>
                  <li>
                    <a href=" ">아메리카노</a>
                  </li>
                  <li>
                    <a href=" ">마키아또</a>
                  </li>
                  <li>
                    <a href=" ">카푸치노</a>
                  </li>
                  <li>
                    <a href=" ">라떼</a>
                  </li>
                  <li>
                    <a href=" ">모카</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">최상의 커피를 즐기는 법</a>
                  </li>
                  <li>
                    <a href=" ">커피 프레스</a>
                  </li>
                  <li>
                    <a href=" ">푸어 오버</a>
                  </li>
                  <li>
                    <a href=" ">아이스 푸어 오버</a>
                  </li>
                  <li>
                    <a href=" ">커피 메이커</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item1">
              <h2>MENU</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">음료</a>
                  </li>
                  <li>
                    <a href=" ">콜드 브루</a>
                  </li>
                  <li>
                    <a href=" ">브루드 커피</a>
                  </li>
                  <li>
                    <a href=" ">에스프레소</a>
                  </li>
                  <li>
                    <a href=" ">프라푸치노</a>
                  </li>
                  <li>
                    <a href=" ">블렌디드</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 리프레셔</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 피지오</a>
                  </li>
                  <li>
                    <a href=" ">티(티바나)</a>
                  </li>
                  <li>
                    <a href=" ">기타 제조 음료</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 주스(병음료)</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">푸드</a>
                  </li>
                  <li>
                    <a href=" ">브레드</a>
                  </li>
                  <li>
                    <a href=" ">케이크</a>
                  </li>
                  <li>
                    <a href=" ">샌드위치 & 샐러드</a>
                  </li>
                  <li>
                    <a href=" ">따뜻한 푸드</a>
                  </li>
                  <li>
                    <a href=" ">과일 & 요거트</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">스타벅스 리저브</li>
                  <li>RESERVE MAGAZINE</li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">에스프레소 음료</li>
                  <li>도피오</li>
                  <li>에스프레소 마키아또</li>
                  <li>아메리카노</li>
                  <li>마키아또</li>
                  <li>카푸치노</li>
                  <li>라떼</li>
                  <li>모카</li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    최상의 커피를 즐기는 법
                  </li>
                  <li>커피 프레스</li>
                  <li>푸어 오버</li>
                  <li>아이스 푸어 오버</li>
                  <li>커피 메이커</li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item3">
              <h2>STORE</h2>
            </li>
            <li className="sub_gnb_nav_item4">
              <h2>RESPONSIBILITY</h2>
            </li>
            <li className="sub_gnb_nav_item5">
              <h2>STARBUCKS REWARDS</h2>
            </li>
            <li className="sub_gnb_nav_item6">
              <h2>CORPORATE SALES</h2>
            </li>
            <li className="sub_gnb_nav_item7">
              <h2>NEW</h2>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PcNav;
