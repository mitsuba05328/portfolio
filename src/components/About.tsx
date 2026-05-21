import profileImage from '../assets/images/profile.jpg';
import { qualifications } from '../data/qualifications';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section about-section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="about"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>About</p>
        <h2>自己紹介</h2>
      </div>
      <div className="about-layout">
        <img src={profileImage} alt="山本悠生のプロフィール写真" className="profile-image" />
        <div className="about-copy">
          <h3>山本 悠生</h3>
          <p>
            情報系の専門学校でWeb開発を学んでいる山本悠生です。HTML、CSS、JavaScriptを中心にフロントエンド開発へ取り組み、
            現在はReact、TypeScript、React Native、Flutterの学習と個人開発を進めています。
          </p>
          <p>
            UI/UXでは、見た目のきれいさだけでなく、ユーザーが迷わず目的を達成できる導線を大切にしています。
            ハッカソンや実習アプリの制作を通じて、企画、設計、実装、改善まで一連の流れを経験してきました。
          </p>
          <p>
            PowerPointによるスライド制作も得意としており、これまで30件以上の資料を作成しました。
            将来は、ユーザー体験を大切にしながら、チームで価値あるプロダクトを育てられるエンジニアを目指しています。
          </p>
        </div>
      </div>
      <div className="qualifications-panel">
        <h3>保有資格</h3>
        <ul>
          {qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
