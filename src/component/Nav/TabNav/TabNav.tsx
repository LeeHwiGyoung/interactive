import { useState } from 'react';
import './TabNav.scss';
import TabMenu from './TabMenu/TabMenu';

function TabNav() {
  const [isClick, setIsClick] = useState<boolean>(false); // tab Menu click 여부

  const clickTabMenu = (event: any) => {
    // body 를 왼쪽으로 이동 , tabmenu를 오른쪽에서 등장하게 함 , 어둡게 표시
    event.preventDefault();
    setIsClick(true);
  };

  return (
    <div className="tab_nav_wrap">
      <h1 className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="타블렛 스타벅스 로고"
        />
      </h1>
      <nav className="tab_gnb_nav">
        <ul>
          <li className="tab_gnb_nav_item1">
            <a href="./">
              <span className="ally">마이 스타벅스</span>
            </a>
          </li>
          <li className="tab_gnb_nav_item2">
            <a href="./">
              <span className="ally">매장찾기</span>
            </a>
          </li>
          <li className="tab_gnb_nav_item3">
            <a href=" " onClick={clickTabMenu}>
              <span className="ally">메뉴 열기</span>
            </a>
          </li>
        </ul>
      </nav>
      <TabMenu clicked={isClick} setClicked={setIsClick} />
    </div>
  );
}
export default TabNav;
