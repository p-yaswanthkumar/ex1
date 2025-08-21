import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // <-- add useLocation

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // <-- get current route
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');
  const [userInitials, setUserInitials] = useState('AD'); // Default to AD
  const [userData, setUserData] = useState({ firstname: '', lastname: '', email: '' });
  
  // Get user data from localStorage
  useEffect(() => {
    const user= localStorage.getItem('loggedInUserEmail')
    if(user)
    {
      try{
        const userdetils= JSON.parse(user)
        const firstname = userdetils.firstName?.[0]?.toUpperCase()||"" ;
        const lastname = userdetils.lastName?.[0]?.toUpperCase()||"" ;
        setUserInitials(firstname+lastname);



      }
      catch(error){
        console.log("failed",error)

      }
    }
    
  }, []);

  // Sync theme with localStorage and document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      // Notify other tabs/pages
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  // Listen for theme changes from other tabs/pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    setUserData({ firstname: '', lastname: '', email: '' });
    setUserInitials('AD');
    setIsAvatarDropdownOpen(false);
    navigate('/Login');
  };

  // Check if on admin dashboard (adjust path as needed)
  const isAdmin = location.pathname.startsWith('/admindashboard');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full !fixed !top-0 !left-0 !right-0 !z-50 transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
    >
      <div className="w-full px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => !isAdmin && navigate('/home1')} className="focus:outline-none" disabled={isAdmin}>
              <img src="/Images/logo111.png" alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          {!isAdmin && (
            <div className="hidden min-[480px]:flex items-center space-x-8">
              {/* Home Dropdown */}

              <div
                className="relative"
                onMouseEnter={() => {
                  if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current);
                  setIsHomeDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200);
                }}
              >
                <button
                  onClick={() => navigate('/home')}
                  className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
                  aria-haspopup="true"
                  aria-expanded={isHomeDropdownOpen}
                >
                  Home
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                    <Link to="/home" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>Home 1</Link>
                    <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>Home 2</Link>
                  </div>
                )}
              </div>


              <Link
                to="/Aboutus"
                className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                  setIsServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
                }}
              >
                <button
                  onClick={() => navigate('/services')}
                  className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
                  aria-haspopup="true"
                  aria-expanded={isServicesDropdownOpen}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                    <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>All Services</Link>
                    <Link to="/education-programs" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Education Programs</Link>
                    <Link to="/healthcare-initiatives" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Healthcare Initiatives</Link>
                    <Link to="/food-distribution" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Food Distribution</Link>
                    <Link to="/disaster-relief" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Disaster Relief</Link>
                    <Link to="/women-empowerment" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Women Empowerment</Link>
                    <Link to="/elderly-care" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>Elderly Care</Link>
                  </div>
                )}
              </div>
              
            
              <Link
                to="/blog"
                className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
              >
                Contact Us
              </Link>

              {/* Dark Mode Toggle */}
              <button
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Avatar with Logout Dropdown */}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full bg-[#00bfff] flex items-center justify-center text-white font-semibold focus:outline-none"
                  onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                >
                  {userInitials}
                </button>
                {isAvatarDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}> 
                    {userData.email === 'admin@enkonix.in' ? (
                      <button
                        className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                        onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                      >
                        Admin Dashboard
                      </button>
                    ) : userData.email ? (
                      <button
                        className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                        onClick={() => { setIsAvatarDropdownOpen(false); navigate('/userdashboard'); }}
                      >
                        User Dashboard
                      </button>
                    ) : null}
                    <button
                      className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-[#00BFFF] flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen((v) => !v)}
              >
                {userInitials}
              </button>
              {isAvatarDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  {userData.email === 'admin@enkonix.in' ? (
                    <button
                      className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                      onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                    >
                      Admin Dashboard
                    </button>
                  ) : userData.email ? (
                    <button
                      className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                      onClick={() => { setIsAvatarDropdownOpen(false); navigate('/userdashboard'); }}
                    >
                      User Dashboard
                    </button>
                  ) : null}
                  <button
                    className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className={`min-[480px]:hidden border-t ${theme === 'dark' ? 'border-[#141B25] bg-[#000]' : 'border-gray-200 bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className={`flex items-center justify-between w-full px-3 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`}
                >
                  <span>Home</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/" className={`block px-3 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-600 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>Home 1</Link>
                    <Link to="/home2" className={`block px-3 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-600 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>Home 2</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/Aboutus" 
                className={`block px-3 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className={`flex items-center justify-between w-full px-3 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>All Services</Link>
                    <Link to="/education-programs" className={`block px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Education Programs</Link>
                    <Link to="/healthcare-initiatives" className={`block px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Healthcare Initiatives</Link>
                    <Link to="/food-distribution" className={`block px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Food Distribution</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                className={`block px-3 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link 
                to="/contact" 
                className={`block px-3 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#1E2A38]' : 'text-gray-800 hover:bg-gray-100'} rounded-md`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;