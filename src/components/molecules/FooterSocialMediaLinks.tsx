import {
  COMPANY_NAME,
  MAIN_EMAIL,
  LOCATION,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from '@/constants';
import { PropsWithChildren } from 'react';

interface FooterSocialMediaLinksProps {
  company?: string;
  phone?: string;
  email?: string;
  address?: string;
  whatsapp?: string;

  className?: string;
}

const FooterSocialMediaLinks: React.FC<
  PropsWithChildren<FooterSocialMediaLinksProps>
> = ({
  children,
  phone = PHONE_NUMBER,
  address = LOCATION,
  whatsapp = WHATSAPP_NUMBER || PHONE_NUMBER,
  email = MAIN_EMAIL,
  company = COMPANY_NAME,
  className,
}) => (
  <div className={`space-y-2 text-sm ${className}`}>
    {children ? (
      <>{children}</>
    ) : (
      <>
        <span className="text-base font-bold tracking-wide text-white">
          Social
        </span>
        <div className="flex items-center mt-1 space-x-3">
          <a
            href="https://www.tiktok.com/@techbysjke"
            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/TECHBYSJke/"
            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4"></circle>
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
            </svg>
          </a>
          <a
            href="https://web.facebook.com/Techbysjke"
            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@techbysjke"
            // href="#"
            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              fill="currentColor"
              className="h-10"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path>
              </g>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-white">
          Follow us on our social media platforms
        </p>
      </>
    )}
  </div>
);

export default FooterSocialMediaLinks;
