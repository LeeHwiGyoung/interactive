/* eslint-disable @typescript-eslint/no-redeclare */
import { useState } from 'react';

interface TabDropDownMenu {
  children: React.ReactNode;
  menuName: string;
}

function TabDropDownMenu({
  children,
  menuName,
}: TabDropDownMenu): React.ReactElement {
  const [display, setDisplay] = useState<boolean>(false);
  const clickMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setDisplay(!display);
  };
  return (
    <li className="tab_dropdown_list">
      <a href=" #" onClick={clickMenu}>
        {menuName}
      </a>
      {display && <ul>{children}</ul>}
    </li>
  );
}

export default TabDropDownMenu;
