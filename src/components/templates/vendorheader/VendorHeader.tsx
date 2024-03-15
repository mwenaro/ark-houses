import { Logo } from '@/components';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';



interface VendorHeaderProps {
    className?: string
    children?: ReactNode
    logoImageSrc?: string | null
}

export default function VendorHeader({ children, className, logoImageSrc }: VendorHeaderProps) {
    return <header className={twMerge("bg-white h-20 flex justify-between fixed w-full z-20 shadow-lg px-6 py-3 max-w-7xl mx-auto", className)}>
        <div className="w-1/6 min-w-[50px]">
          <Link href="/"  ><Logo LOGO_PIC={logoImageSrc || `/vendors/vendor/logo.jpg`} className="w-full justify-self-start px-0 mx-0" /></Link>

        </div>
        {children}
    </header>
}