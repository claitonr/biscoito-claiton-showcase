const Footer = () => {
  return (
    <footer className="w-full py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="footer-text">
          © 2021 - 2024 claiton · Licensed under{' '}
          <a 
            href="https://www.gnu.org/licenses/gpl-3.0.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GNU GPL v3
          </a>
          {' '} · Powered by{' '}
          <a 
            href="https://gohugo.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Hugo
          </a>
          {' '} &{' '}
          <a 
            href="https://github.com/CaiJimmy/hugo-theme-stack" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Coder
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;