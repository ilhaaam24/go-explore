export default function Footer() {
  return (
    <footer className="bg-white w-full">
      {/* Main Footer Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 sm:px-10 lg:px-40 py-16 text-center lg:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center lg:items-start">
          <img src="./assets/images/logo.png" alt="Logo" className="h-10 w-auto" />
          <p className="font-poppins font-medium text-sm text-[#5E6282] mt-5 max-w-[260px] leading-6">Book your trip in minutes, get full control for much longer.</p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-poppins font-bold text-lg sm:text-xl mb-4">Company</h2>
          <ul className="flex flex-col gap-2 font-medium text-[#5E6282]">
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">About</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-poppins font-bold text-lg sm:text-xl mb-4">Contact</h2>
          <ul className="flex flex-col gap-2 font-medium text-[#5E6282]">
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Help</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Press</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h2 className="font-poppins font-bold text-lg sm:text-xl mb-4">More</h2>
          <ul className="flex flex-col gap-2 font-medium text-[#5E6282]">
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Airline Fees</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Airline</li>
            <li className="hover:text-[#181E4B] transition-colors cursor-pointer">Low Fare Tips</li>
          </ul>
        </div>

        {/* Social & App Section */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex gap-5 mb-6">
            <img src="./assets/logos/fb.png" alt="Facebook" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
            <img src="./assets/logos/ig.png" alt="Instagram" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
            <img src="./assets/logos/tw.png" alt="Twitter" className="h-8 w-8 cursor-pointer hover:opacity-80 transition" />
          </div>
          <p className="font-poppins font-medium text-[#5E6282]">Discover our app</p>
          <div className="flex gap-3 mt-4">
            <img src="./assets/logos/gplay.png" alt="Google Play" className="h-9 w-auto cursor-pointer hover:opacity-90 transition" />
            <img src="./assets/logos/app.png" alt="App Store" className="h-9 w-auto cursor-pointer hover:opacity-90 transition" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full border-t border-gray-200 py-6 flex justify-center">
        <p className="font-poppins font-medium text-[#5E6282] text-sm text-center">© {new Date().getFullYear()} All rights reserved @jadoo.co</p>
      </div>
    </footer>
  );
}
