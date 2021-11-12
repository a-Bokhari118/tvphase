const Header = () => {
  return (
    <div className="h-20 w-full bg-gray-800">
      <nav className="container flex justify-between items-center mx-auto h-20">
        <div className="flex justify-between items-center">
          <div className="w-1/3 cursor-pointer">
            <img src="/images/logo3.png" alt="website logo" />
          </div>
          <ul className="flex justify-center items-center space-x-5 text-gray-50 font-semibold text-lg cursor-pointer">
            <li>Movies</li>
            <li>TV Series</li>
            <li>New Relased</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="flex justify-between items-center space-x-3 uppercase">
          <a className="text-gray-50 font-semibold ">login</a>
          <a className="px-2 py-1 border-none rounded bg-gray-50 text-purple-800 font-semibold">
            SignUp
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
