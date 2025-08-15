const Navbar: React.FC = () => {
  return (
    <nav className="mt-10">
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-3 py-2 relative">
        <h3 className="text-4xl font-medium pacifico-regular">gaurav</h3>
        <div className="fixed flex  bg-white text-black font-medium px-12 py-3 space-x-8 left-[35%] rounded-full">
          <p className="hover:bg-gray-100 px-2.5 py-1 rounded-full">Home</p>
          <p className="hover:bg-gray-100 px-2.5 py-1 rounded-full">Work</p>
          <p className="hover:bg-gray-100 px-2.5 py-1 rounded-full">About</p>
          <p className="hover:bg-gray-100 px-2.5 py-1 rounded-full">Contact</p>
        </div>
        <p className="text-lg">contact@gauravgangwar.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
