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
        <p className="search">
          <input className="searchBar" placeholder="통합검색" type=" text" />
          <a className="searchBtn" placeholder="통합검색" href=" ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icon_magnifier_black.png`}
              alt="돋보기 검색 아이콘"
            />
          </a>
        </p>
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
                  <li className="dropDown_content_title">
                    <a href=" ">상품</a>
                  </li>
                  <li>
                    <a href=" ">머그</a>
                  </li>
                  <li>
                    <a href=" ">글라스</a>
                  </li>
                  <li>
                    <a href=" ">플라스틱 텀블러</a>
                  </li>
                  <li>
                    <a href=" ">보온병</a>
                  </li>
                  <li>
                    <a href=" ">액세서리</a>
                  </li>
                  <li>
                    <a href=" ">선물세트</a>
                  </li>
                  <li>
                    <a href=" ">커피 용품</a>
                  </li>
                  <li>
                    <a href=" ">패키지 티(티바나)</a>
                  </li>
                  <li>
                    <a href=" ">시럽</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">카드</a>
                  </li>
                  <li>
                    <a href=" ">실물카드</a>
                  </li>
                  <li>
                    <a href=" ">e-Gift카드</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">메뉴 이야기</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 티바나</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 콜드 브루</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item3">
              <h2>STORE</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">매장 찾기</a>
                  </li>
                  <li>
                    <a href=" ">퀵 검색</a>
                  </li>
                  <li>
                    <a href=" ">지역 검색</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">드라이브 스루 매장</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">스타벅스 리저브 매장</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">커뮤니티 스토어 매장</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item4">
              <h2>RESPONSIBILITY</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">사회공헌 캠페인 소개</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">지역 사회 참여 활동</a>
                  </li>
                  <li>
                    <a href=" ">희망배달 캠페인</a>
                  </li>
                  <li>
                    <a href=" ">재능기부 카페 소식</a>
                  </li>
                  <li>
                    <a href=" ">커뮤니티 스토어</a>
                  </li>
                  <li>
                    <a href=" ">청년 지원 프로그램</a>
                  </li>
                  <li>
                    <a href=" ">우리 농산물 사랑 캠페인</a>
                  </li>
                  <li>
                    <a href=" ">우리 문화 지키기</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">환경보호 활동</a>
                  </li>
                  <li>
                    <a href=" ">친환경 활동</a>
                  </li>
                  <li>
                    <a href=" ">일회용 컵 없는 매장</a>
                  </li>
                  <li>
                    <a href=" ">커피 원두 재활용</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">윤리 구매</a>
                  </li>
                  <li>
                    <a href=" ">윤리적 원두 구매</a>
                  </li>
                  <li>
                    <a href=" ">공정무역 인증</a>
                  </li>
                  <li>
                    <a href=" ">커피 농가 지원 활동</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">글로벌 사회 공헌</a>
                  </li>
                  <li>
                    <a href=" ">윤리경영 보고서</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 재단</a>
                  </li>
                  <li>
                    <a href=" ">지구촌 봉사의 달</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item5">
              <h2>STARBUCKS REWARDS</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">스타벅스 리워드</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 리워드 소개</a>
                  </li>
                  <li>
                    <a href=" ">등급 및 혜택</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 별</a>
                  </li>
                  <li>
                    <a href=" ">자주하는 질문</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">스타벅스 카드</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 카드 소개</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 카드 갤러리</a>
                  </li>
                  <li>
                    <a href=" ">등록 및 조회</a>
                  </li>
                  <li>
                    <a href=" ">충전 및 이용안내</a>
                  </li>
                  <li>
                    <a href=" ">분실신고/환불신청</a>
                  </li>
                  <li>
                    <a href=" ">자주 하는 질문</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">스타벅스 e-Gift Card</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 e-Gift Card 소개</a>
                  </li>
                  <li>
                    <a href=" ">이용안내</a>
                  </li>
                  <li>
                    <a href=" ">선물하기</a>
                  </li>
                  <li>
                    <a href=" ">자주 하는 질문</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item6">
              <h2>CORPORATE SALES</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">단체 및 기업 구매 안내</a>
                  </li>
                  <li>
                    <a href=" ">MD 상품</a>
                  </li>
                  <li>
                    <a href=" ">실물카드</a>
                  </li>
                  <li>
                    <a href=" ">e-Gift Card(MMS)</a>
                  </li>
                  <li>
                    <a href=" ">e-Gift Card(BULK)</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">단체 주문 배달 안내</a>
                  </li>
                  <li>
                    <a href=" ">단체 주문 배달 안내</a>
                  </li>
                  <li>
                    <a href=" ">단체 주문 신청</a>
                  </li>
                  <li>
                    <a href=" ">신청 내역 조회</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
            <li className="sub_gnb_nav_item7">
              <h2>NEW</h2>
              <DropDownContent>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">이벤트</a>
                  </li>
                  <li>
                    <a href=" ">전체</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 카드</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 리워드</a>
                  </li>
                  <li>
                    <a href=" ">온라인</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">뉴스</a>
                  </li>
                  <li>
                    <a href=" ">전체</a>
                  </li>
                  <li>
                    <a href=" ">상품 출시</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스와 문화</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 사회공헌</a>
                  </li>
                  <li>
                    <a href=" ">스타벅스 카드출시</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">매장별 이벤트</a>
                  </li>
                  <li>
                    <a href=" ">일반 매장</a>
                  </li>
                  <li>
                    <a href=" ">신규 매장</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">공지사항</a>
                  </li>
                </ul>
                <ul className="dropDown_content_item">
                  <li className="dropDown_content_title">
                    <a href=" ">월페이퍼</a>
                  </li>
                </ul>
              </DropDownContent>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PcNav;
