/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './TabMenu.scss';
import { useEffect, useRef } from 'react';
import TabDropDownMenu from './TabDropDownMenu';

interface TabMenuProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
function TabMenu({ clicked, setClicked }: TabMenuProps): React.ReactElement {
  const tabRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);

  const clickClose = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    setClicked(!clicked);
  };
  useEffect(() => {
    const open = () => {
      if (clicked) {
        tabRef.current?.classList.add('open');
        dimRef.current?.style.setProperty('display', 'block');
        return;
      }
      tabRef.current?.classList.remove('open');
      tabRef.current?.classList.add('close');
      dimRef.current?.style.setProperty('display', 'none');
      setTimeout(() => tabRef.current?.classList.remove('close'), 1000);
    };
    open();
  }, [clicked]);

  return (
    <>
      <div className="tab_dim" ref={dimRef} />
      <div className="tab_menu_wrap" ref={tabRef}>
        <div className="tab_menu_inner">
          <div className="tab_search"> 검색창</div>
          <aside className="btn_close_tab_menu">
            <img
              onClick={clickClose}
              src={`${process.env.PUBLIC_URL}/assets/closebtn.png`}
              alt="닫기 버튼"
            />
          </aside>
          <nav className="tab_menu">
            <ul className="tab_dropdown_menu">
              <TabDropDownMenu menuName="My Starbucks">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="COFFEE">
                <ul>
                  <li>한눈에 보기</li>
                  <TabDropDownMenu menuName="커피">
                    <ul>
                      <li>스타벅스 원두</li>
                      <li>스타벅스 비아</li>
                      <li>스타벅스앳홈by캡슐</li>
                      <li>나와 어울리는 커피</li>
                    </ul>
                  </TabDropDownMenu>
                </ul>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="MENU">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="STORE">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="RESPONSIBILITY">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="Starbucks Rewards">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="CORPORATE SALES">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
              <TabDropDownMenu menuName="WHAT'S NEW">
                <li>한눈에 보기</li>
              </TabDropDownMenu>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default TabMenu;
