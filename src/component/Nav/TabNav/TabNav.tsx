import './TabNav.scss';

function TabNav() {
  const onClick = (event: any) => {
    event.preventDefault();
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
            <a href=" " onClick={onClick}>
              <span className="ally">메뉴 열기</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default TabNav;
