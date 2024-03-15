import {
  COMPANY_NAME,
  MAIN_EMAIL,
  LOCATION,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from '@/constants';
import { PropsWithChildren } from 'react';

interface FooterContactDetailsProps {
  company?: string;
  phone?: string;
  email?: string;
  address?: string;
  whatsapp?: string;

  className?: string;
}

const FooterContactDetails: React.FC<
  PropsWithChildren<FooterContactDetailsProps>
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
        <p className="text-base font-bold tracking-wide text-white">Contacts</p>
        <div className="flex">
          <p className="mr-1 text-white">Phone:</p>
          <a
            href={`tel:${phone.split(' ').join('')}`}
            aria-label="Our phone"
            title="Our phone"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {phone}
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-white">Email:</p>
          <a
            // href="mailto:nolojiaschool@gmail.com"
            href={`mailto:${email}`}
            aria-label="Our email"
            title="Our email"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {email}
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-white">Address:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {address}
          </a>
        </div>
      </>
    )}
  </div>
);

export default FooterContactDetails;
