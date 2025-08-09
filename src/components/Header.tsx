import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-normal text-foreground tracking-wide">
          Claiton
        </h1>
        <div className="flex items-center space-x-4">
          <nav>
            <a 
              href="/blog" 
              className="nav-link text-base font-normal"
            >
              blog
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;