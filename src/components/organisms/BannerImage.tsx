import { PropsWithChildren } from 'react';
import {twMerge} from 'tailwind-merge'
import { Img } from '../atoms';

interface BannerImageProps extends PropsWithChildren {
  imageSrc: string;
  className?:string
}

const BannerImage: React.FC<BannerImageProps> = ({ imageSrc, children, className }) => {
  return (
    <div className={twMerge(`w-full h-full relative overflow-hidden`, className)}>
      <Img src={imageSrc} alt="Section Image" className="object-cover h-full" />
      {children ? (
        <div className="w-full h-full absolute inset-0 top-0 left-0 bottom-0 right-0">
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BannerImage;
