import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type AuthNavProps = {
  className?: string;
  navItems?: { title: string; href: string }[] | [];
};
export default function AuthNav({ className = "", navItems }: AuthNavProps) {
  const defaultNavItems = [
    { title: "Login", href: "/auth/login" },
    { title: "Signup", href: "/auth/signup" },
  ];

  const actualItems = navItems || defaultNavItems;
  return (
    <div className={twMerge("flex gap-4 justify-end items-center", className)}>
      {actualItems.map((item, indx) => (
        <Link
          key={item.href + indx}
          href={item.href}
          className={twMerge(
            `hover:cursor-pointer px-6 py-3 rounded-lg font-bold text-black  hover:text-white hover:bg-slate-800`,
            `${
              item.href.includes("signup")
                ? "bg-product-blue text-white hover:bg-black"
                : " hover:bg-opacity-60"
            }`
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
