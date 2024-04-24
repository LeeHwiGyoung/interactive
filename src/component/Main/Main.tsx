import './Main.scss';
import { useState } from 'react';
import MainVisual from './MainVisual/MainVisual';
import NoticeLine from './NoticeLine/NoticeLine';
import Reward from './Reward/Reward';
import MainBean from './MainBean/MainBean';
import Reserve from './Reserve/Reserve';
import Fav from './Fav/Fav';
import Magazine from './Magazine/Magazine';
import Store from './Store/Store';
import Promotion from './Promotion/Promotion';

function Main() {
  const [pop, setPop] = useState<boolean>(false);

  return (
    <main id="main" className="container">
      <MainVisual />
      <NoticeLine pop={pop} isPop={setPop} />
      <Promotion pop={pop} />
      <Reward />
      <MainBean />
      <Reserve />
      <Fav />
      <Magazine />
      <Store />
    </main>
  );
}
export default Main;
