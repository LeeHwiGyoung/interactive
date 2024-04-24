import './Promotion.scss';

interface PromotionProps {
  pop: boolean;
}
function Promotion({ pop }: PromotionProps) {
  return <section className={pop ? 'promotion_wrap pop' : 'promotion_wrap'} />;
}
export default Promotion;
