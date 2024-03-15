'use client';
import { Link as ScrollLink } from 'react-scroll';
import { twMerge } from "tailwind-merge"
import { Logo } from '../molecules';

import { useState } from 'react';

interface NavbarProps {
  navLinks?: { title: string; href: string }[],
  logo_pic?: string
  className?: string
}

const linkItemStyles = ` w-full md:w-fit rounded-md hover:bg-skin-primary hover:text-white px-6 py-3 `

const defaultNavLinks: { title: string; href: string }[] = [
  { title: 'Home', href: 'home' },
  { title: 'About us', href: 'about' },
  { title: 'Our Activities', href: 'gallery' },
  { title: 'Services', href: 'services' },
  { title: 'Courses', href: 'courses' },
  { title: 'Contact', href: 'contact' },
  { title: 'Learn', href: 'booking' },
];

const generatedLinks = (navLinks: { title: string; href: string }[], handleNavToggle : any) => navLinks && navLinks.map((link, indx) => {
  if (indx === navLinks.length - 1)
    return (
      <li key={link.href} className="w-full md:w-fit hover:rounded-md mx-2"
      onClick={() => handleNavToggle()}>
        <ScrollLink
          // to={'contact'}
          to={link.href}
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
          className={`bg-skin-accent text-white font-bold uppercase  ${linkItemStyles} hover:bg-skin-primary`}
        >
          {link.title}
        </ScrollLink>
      </li>
    );
  if (link.title.toLocaleLowerCase().split(' ').includes('about'))
    return (
      <li
        key={link.href}
        onClick={() => handleNavToggle()}
      >
        <ScrollLink
          to={link.href}
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
          // className="w-full md:w-fit hover:rounded-md hover:bg-skin-accent hover:text-white px-6 py-3"
          className={linkItemStyles}
        >
          <span>{link.title.split(' ')[0]}</span>
        </ScrollLink>
      </li>
    );

  return (
    <li
      key={link.href}
      onClick={() => handleNavToggle()}
    >
      <ScrollLink
        to={link.href}
        smooth={true}
        duration={500}
        offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
        // className="w-full md:w-fit hover:rounded-md hover:bg-skin-accent hover:text-white px-6 py-3"
        className={linkItemStyles}
      >
        <span>{link.title}</span>
      </ScrollLink>
    </li>
  );
});

export default function Navbar({
  navLinks = defaultNavLinks,
  logo_pic = "",
  className = ""
}: NavbarProps) {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  function handleNavToggle() {
    setNavToggle(!navToggle);
  }

  return (
    <nav className={twMerge("w-full flex h-fit md:h-20 flex-col md:flex-row items-center justify-between  pb-6 px-6 pt-0 md:p-4 md:px-8 font-normal bg-white text-base", className)}>
      <ScrollLink
        className="h-20 flex justify-start items-center p-2 w-fit"
        to={'home'}
        smooth={true}
        duration={500}
        offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
      >


        <Logo
          className="mr-1 min-w-20"

          altSrc={logo_pic}
        />

        {/* <Typography variant="h1" className='pl-2 ml-0 md:text-3xl z-50'>TechBySj </Typography> */}
      </ScrollLink>

      {/* Midium to large screen navigation */}
      <ul className="hidden w-full md:w-fit md:flex flex-col md:flex-row items-center bg-inherit mb-5 sm:mb-0">
        {generatedLinks(navLinks,handleNavToggle)}
      </ul>

      {/* {Mobile Navigation} */}
      <ul
        className={`${!navToggle ? 'hidden' : 'flex'
          } w-full md:w-fit md:hidden flex-col md:flex-row items-center gap-5 md:gap-10 bg-inherit p-4 mb-5 sm:mb-0`}
      >
        {generatedLinks(navLinks, handleNavToggle)}
      </ul>

      <div className="md:hidden absolute top-4 right-4 z-50">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => handleNavToggle()}
        >
          {navToggle ? (
            <>X</>
          ) : (
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
