const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-800 text-white shadow-md p-4 item-center justify-between'>
        <div className= 'container mx-auto flex flex-col md:flex-row item-center justify-between'>

            <p className='text-sm text-gray 400'>
                @{new Date().getFullYear()} Personal Diary, All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
        </div>
        </footer>
    </div>
  )
}
export default Footer;
