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
          <p>情報系の専門学校でWeb開発を学んでいる山本悠生です。</p>
          <p>
            フロントエンドを中心に、React、TypeScript、React Native、Expoを使ったアプリ開発に取り組んでいます。
            画面をただ作るだけでなく、ユーザーが迷わず使える導線や、触っていて楽しいUIを意識して制作しています。
          </p>
          <p>
            これまでに、ハッカソンや個人開発を通して、学生生活を少し楽しくする「キャンパス彼女」や、
            感謝の気持ちをチケットとして送り合える「こころチケット」などを制作してきました。
            企画、UI設計、実装、発表まで幅広く経験しています。
          </p>
          <p>
            最近はフロントエンドだけでなく、APIやDB連携などのバックエンドにも挑戦しており、
            将来的にはUI/UXを大切にしながら、プロダクト全体を考えられるエンジニアを目指しています。
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
