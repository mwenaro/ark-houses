'use client';
import { ReactNode } from 'react';
import { Button } from '../atoms';

interface CTAButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => (
  <button
  className={` bg-skin-accent text-white font-bold p-4 px-8 rounded hover:border-2 hover:border-white  hover:border-solid hover:rounded text-base ${className}`}

    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default CTAButton;
