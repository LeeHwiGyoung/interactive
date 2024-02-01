import './Reward.scss';

function Reward() {
  return (
    <section className="section-reward-wrap">
      <div className="reward-inner">
        <div className="reward-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/rewards-logo.png`}
            alt="리워드 스타벅스 로고"
          />
        </div>

        <div className="reward-inner-text">
          <div className="info_content">
            <div className="info_content_text">
              <h2>
                스타벅스만의 특별한 혜택,
                <br className="tab_br" />
                <strong>스타벅스 리워드</strong>
              </h2>
              <p>
                <strong>스타벅스 회원이세요? </strong>
                로그인을 통해 <br className="tab_br" />
                나만의 리워드를 확인해보세요.
                <br className="tab_br" />
              </p>
              <p>
                <strong>스타벅스 회원이 아니세요? </strong>
                <br className="tab_br" />
                가입을 통해 리워드 혜택을 즐기세요.
              </p>
            </div>
            <div className="signinWrap">
              <a href=" " className="btn-signin_join">
                회원가입
              </a>
              <a href=" " className="btn-signin_login">
                로그인
              </a>
            </div>
          </div>
          <div className="gift-content">
            <div className="gift-text">
              <p>
                회원 가입 후 , 스타벅스 e-Gift Card를
                <br className="tab_br" />
                <strong>
                  &quot;나에게 선물하기&quot;로 구매하시고, 편리하게 등록하세요!
                </strong>
                <br />
                카드를 등록하여 스타벅스 리워드 회원이 되신 후,
                <br className="tab_br" /> 첫 구매를 하시면 무료 음료쿠폰을
                드립니다!
              </p>
            </div>
            <div className="btn-egift">
              <a href=" ">e-Gift Card 선물하기</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reward;
