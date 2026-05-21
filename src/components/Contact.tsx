import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section contact-section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="contact"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>Contact</p>
        <h2>お問い合わせ</h2>
      </div>
      <div className="contact-panel">
        <p>ポートフォリオをご覧いただきありがとうございます。制作や開発について、お気軽にご連絡ください。</p>
        <a href="mailto:y.haruki328@gmail.com">Email: y.haruki328@gmail.com</a>
        <a href="https://github.com/mitsuba05328" target="_blank" rel="noreferrer">
          GitHub: github.com/mitsuba05328
        </a>
        <a href="https://twitter.com/y_haruki05" target="_blank" rel="noreferrer">
          X / Twitter: @y_haruki05
        </a>
      </div>
    </section>
  );
}

export default Contact;
