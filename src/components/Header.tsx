const Header = () => {
  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-normal text-foreground tracking-wide">
          claiton
        </h1>
        <nav>
          <a 
            href="/blog" 
            className="nav-link text-base font-normal"
          >
            blog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;