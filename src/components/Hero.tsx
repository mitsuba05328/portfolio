import heroImage from '../assets/images/hero.jpg';

function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Portfolio hero">
      <img src={heroImage} alt="ポートフォリオの背景" className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Frontend Developer Portfolio</p>
        <h1>
          Portfolio
          <span>HARUKI YAMAMOTO</span>
        </h1>
        <p className="hero-lead">
          React、UI/UX、ハッカソン、個人開発を通して、使いやすく気持ちよく触れるプロダクトづくりに取り組んでいます。
        </p>
      </div>
    </section>
  );
}

export default Hero;
