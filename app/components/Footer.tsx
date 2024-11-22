export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">KAkshya-KUL</h3>
              <p className="text-gray-600 dark:text-gray-300">Empowering Indian students to make informed decisions about their education.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Contact Us</h4>
              <p className="text-gray-600 dark:text-gray-300">Email: info@kakshya-kul.com</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: +91 123-456-7890</p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Facebook</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Twitter</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} KAkshya-KUL. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  