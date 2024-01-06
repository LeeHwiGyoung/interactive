import PcNav from './PcNav/PcNav';
import TabNav from './TabNav/TabNav';
import './Nav.scss';

function Nav() {
  return (
    <div className="gnb_wrap">
      <PcNav />
      <TabNav />
    </div>
  );
}

export default Nav;
