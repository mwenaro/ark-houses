"use client"
import { twMerge } from 'tailwind-merge';
import Navbar from './Navbar';

interface HeaderProps {
  logo_pic?:string
  className?: string
  navClass?:string
  children?: React.ReactNode
  navLinks?: { title: string; href: string }[]
}

export default function Header({logo_pic, className, navClass,children, ...others} :HeaderProps ) {
  return (
    <>
    <header className={twMerge("w-full md:w-full fixed top-0 left-0 right-0 md:shadow-lg z-20 h-20 max-h-fit md:bg-white", className)}>
      <Navbar logo_pic={logo_pic} className = {navClass}  {...others} />
    </header>
    {children}
    </>
  );
}
