const Header = () => {
  return (
    <header className="bg-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center">
            <i className="fa-solid fa-film text-3xl text-indigo-400 mr-2"></i>
            <h1 className="text-3xl font-bold tracking-wider text-white">
              Moviefy
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
