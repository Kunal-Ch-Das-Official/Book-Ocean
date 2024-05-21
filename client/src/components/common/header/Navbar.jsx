import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../assets/icons/Book-Ocean-Logo-removebg-preview.png';
import toggleIcon from '../../../assets/icons/mobile-toggle-icon.png';
import xmarkIcon from '../../../assets/icons/xmark-icon.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle Menu 
    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    useEffect(()=> {
     const handleScroll = () => {
        if(window.scrollY > 100){
            setIsSticky(true);
        }else{
            setIsSticky(false);
        }
     }
     window.addEventListener('scroll', handleScroll);
     return () => {
        window.addEventListener('scroll', handleScroll);  
     }
    }, []);

    // Navitems Here 
    const navItems = [
      {
        link: "Home",
        path: "/"
      },
      {
        link: "About",
        path: "/about"
      },
      {
        link: "Shop",
        path: "/shop"
      },
      {
        link: "Sell Books",
        path: "/admin/dashbord"
      },
      {
        link: "Blog",
        path: "/blog"
      }
    ];

    return (
     <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-teal-300' : ''}`}>
         
            <div className='flex justify-between items-center'>
               {/* Rendering logo  */}
                <Link to="/" className={'text-xl font-bold text-blue-800 flex items-center gap-2'}>
                <img src={brandLogo} alt="Book-Ocean" height={60} width={60} className={'inline-block'}/>
                Books Ocean</Link>
            
             {/* Nav item for large device  */}
            <ul className={'md:flex space-x-12 hidden'}>
            {
                navItems.map(({link, path}) => 
                <Link key={path} to={path}
                className={`block text-sm
                text-black uppercase cursor-pointer
                hover:text-blue-800 font-bold`}>{link}</Link>
                )
            }
            </ul>
            {/* Toggle button for large device  */}
            <div className={'space-x-12 hidden lg:flex items-center'}>
            <button>
            <img src={toggleIcon} alt="open-menu" height={50} width={50}/>
            </button>
            </div>

            {/* Menu close button for mobile device  */}
            <div className={'md:hidden'}>
              <button onClick={toggleMenu} className={'focus:outline-none'}>
                {
                  isMenuOpen 
                  ? 
                  <img src={xmarkIcon} alt="close-menu" height={40} width={40} />
                  : 
                  <img src={toggleIcon} alt="open-menu" height={50} width={50}/>
                }
              </button>
            </div>

            {/* Navigation for small devices */}
            <div className={`space-y-4 px-4 mt-12 py-7 bg-teal-300
             ${isMenuOpen ? 'block fixed top-5 right-0 left-0' : 'hidden'}`}>
              
            {
                navItems.map(({link, path}) => 
                <Link key={path} to={path}
                className={`block text-sm
                text-blue-800 uppercase cursor-pointer
                hover:text-white font-bold`}>{link}</Link>
                )
            }
           </div>
            </div>
        </nav>
     </header>
    )
  }

export default Navbar;
