import Image from 'next/image';
import Link from 'next/link';
import {MdMenu} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  const displayMenu = () => {
    if(isMenuOpen){
      return 'flex sm:hidden flex-col justify-center items-center '
    }else{
      return 'hidden'
    }
  }
  return (
    <div className="nav_container">
      <nav>
        <Image src="/nav_logo.png" alt="logo" width={240} height={36} />
        <div className='right_contents'>
          <div className="nav_links">
            <Link href="/">Components</Link>
          </div>
          <div className="nav_links">
            <Link href="/">Documentation</Link>
          </div>
          <div className="nav_links">
            <Link href="/">About Us</Link>
          </div>
        </div>
        <div className='flex sm:hidden' onClick={showMenu}>
          <p>{isMenuOpen ? <AiOutlineClose/> : <MdMenu/>}</p>
        </div>
      </nav>
        <div className={displayMenu()}>
          <div className="nav_links">
            <Link href="/">Components</Link>
          </div>
          <div className="nav_links">
            <Link href="/">Documentation</Link>
          </div>
          <div className="nav_links">
            <Link href="/">About Us</Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
