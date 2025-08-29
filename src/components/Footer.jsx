
import { 
  Facebook, 
  Twitter, 
  Rss, 
  Globe, 
  Github 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7D2DE1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#7D2DE1]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Top row: logo + links + socials */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-center md:text-left gap-8 md:gap-0">
          
          {/* Logo + slogan */}
          <div className="flex-1 min-w-[200px]">
            <h2 
              className="font-bold text-2xl mb-3 bg-clip-text text-transparent" 
              style={{ backgroundImage: "linear-gradient(to right, #7D2DE1, #a26af4)" }}
            >
              LOGO
            </h2>
            <p className="text-sm text-gray-400">SLOGAN COMPANY</p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[200px]">
            <ul className="space-y-3">
              <li className="font-semibold text-white mb-3 text-lg">
                Contact Us:
              </li>
              <li>
                <a 
                  href="mailto:info@yourcompany.com" 
                  className="hover:underline transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                  style={{ color: "#7D2DE1" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">info@yourcompany.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="hover:underline transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                  style={{ color: "#7D2DE1" }}
                >
                  <span className="group-hover:translate-x-1 transition-transform">+1 (234) 567-890</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[200px]">
            <ul className="space-y-3">
              <li className="font-semibold text-white mb-3 text-lg">
                Projects
              </li>
              {["Project One", "Project Two", "Project Three"].map((project, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                    style={{ color: "#7D2DE1" }}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "#7D2DE1" }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">{project}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Social Icons */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-white mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {[Facebook, Twitter, Rss, Globe, Github].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border hover:scale-110 transition-all duration-300 group"
                  style={{ borderColor: "#7D2DE1", backgroundColor: "rgba(125,45,225,0.05)" }}
                >
                  <Icon 
                    className="w-5 h-5 transition-colors duration-300" 
                    style={{ color: "#7D2DE1" }} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10 mt-16"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 mt-8">
          © Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
