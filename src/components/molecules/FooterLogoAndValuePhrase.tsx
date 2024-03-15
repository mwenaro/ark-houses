import { PropsWithChildren } from 'react';
import { Img } from '../atoms';
//import { LOGO_PIC } from '@/assets/images';

interface FooterLogoAndValuePhraseProps {
  value_phrase?: string;
  className?: string;
  LOGO_PIC?:string
}

const FooterLogoAndValuePhrase: React.FC<
  PropsWithChildren<FooterLogoAndValuePhraseProps>
> = ({
  children,
  value_phrase = 'Unlock your potential through technology. Reach out to  us now to Explore Endless Possibilities!.',
  className,
  LOGO_PIC = ""
}) => (
  <div className={`sm:col-span-2 ${className}`}>
    {children ? (
      <>{children}</>
    ) : (
      <>
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <Img src={LOGO_PIC} className="h-16 aspect-square" alt="" />
        </a>
        <div className="mt-6 lg:max-w-sm">
          <p className="text-sm text-white">{value_phrase}.</p>
        </div>
      </>
    )}
  </div>
);

export default FooterLogoAndValuePhrase;
