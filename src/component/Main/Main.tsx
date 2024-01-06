import './Main.scss';
import MainVisual from './MainVisual/MainVisual';
import NoticeLine from './NoticeLine/NoticeLine';
import Reward from './Reward/Reward';
import MainBean from './MainBean/MainBean';
import Reserve from './Reserve/Reserve';
import Fav from './Fav/Fav';
import Magazine from './Magazine/Magazine';
import Store from './Store/Store';

function Main() {
  return (
    <main id="main" className="container">
      <MainVisual />
      <NoticeLine />
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
