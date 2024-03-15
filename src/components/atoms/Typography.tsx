import React, { ReactNode } from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const getTypographyClasses = (): string => {
    switch (variant) {
      case 'h1':
        return 'text-2xl md:text-4xl font-extrabold p-4 px-8';
      case 'h2':
        return 'text-xl md:text-3xl font-bold p-4 px-8';
      case 'h3':
        return 'text-lg md:text-2xl font-semibold p-4 px-8';

      case 'h4':
        return 'text-md md:text-xl font-bold p-4 px-8';

      case 'h5':
        return 'text-base md:text-lg font-bold p-4 px-8';
      case 'h6':
        return 'text-thin md:text-base';
       case 'p':
        return 'text-thin md:text-base';
      default:
        return '';
    }
  };

  const Tag = variant;

  // return <Tag>{children}</Tag>;

  return (
    <Tag className={`${getTypographyClasses()} ${className} `}>{children}</Tag>
  );
};

export default Typography;
