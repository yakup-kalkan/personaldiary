const Header = () => {
    return (
      <header className='bg-white shadow-md p-4 flex items-center justify-between'>
          {/* Logo */}
          <img src="./src/img/logo.jpg" className='h-24'/>
          {/* Add Entry Button */}
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
              Add Entry
          </button>
      </header>
  
    );
  }
  export default Header;