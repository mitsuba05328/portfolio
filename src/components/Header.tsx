import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={(event) => {
        event.preventDefault();
        handleNavClick('#home');
      }}>
        Portfolio
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="ナビゲーションを開閉"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav className={isMenuOpen ? 'is-open' : ''} aria-label="Main Navigation">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={(event) => {
              event.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
