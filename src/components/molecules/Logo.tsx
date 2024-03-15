//import { LOGO_PIC } from '@/assets/images';
import { twMerge } from 'tailwind-merge';
import { Img } from '../atoms';

export default function Logo({ className, altSrc, LOGO_PIC ="" }: { className?: string, altSrc?:string, LOGO_PIC?: string }) {
  return (
    <Img
      src={altSrc || LOGO_PIC}
      // src={'/assets/images/logo_with_text.png'}
      alt={`logo image`}
      className={twMerge(`h-full aspect-auto object-contain `, className)}
    />
  );
}
