import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pokémon Universe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
