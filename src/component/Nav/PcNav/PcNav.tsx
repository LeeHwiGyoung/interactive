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
          <ul>
            <li className="sub_gnb_nav_item1">
              <h2>COFFEE</h2>
            </li>
            <li className="sub_gnb_nav_item2">
              <h2>MENU</h2>
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
