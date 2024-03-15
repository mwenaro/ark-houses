import { Img } from "@/components";
import Link from "next/link";
const NavItem = ({ label, href }: any) => (
  <li>
    <Link href={href}>{label}</Link>
  </li>
);
export default function Header() {
  const navItems = [
    {
      href: "/",
      label: "Home",
    },
    { href: "/properties", label: "Listing" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="w-full h-[100px] flex justify-center items-center">
      <nav className="w-full flex justify-between">
        <div className="flex gap-12 h-full items-center ">
          <Link href={'/'} className="w-24 p-4"><Img src="/logos/ark-logo.png" alt="logo"/></Link>
          <ul className="flex gap-4"> 
            {
              navItems.map((link, indx)=><NavItem key={indx} {...link} />)
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}
