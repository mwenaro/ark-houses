import { PropsWithChildren } from 'react';

interface SiteCopyRightProps {
  company?: string;
  className?: string;
}

const SiteCopyRight: React.FC<PropsWithChildren<SiteCopyRightProps>> = ({
  children,
  company = 'techbysj',
  className,
}) => (
  <div
    className={`flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row ${className}`}
  >
    {children ? (
      <>{children}</>
    ) : (
      <p className="text-sm text-white text-center">
        © Copyright {new Date().getFullYear()} {company || 'yourcompanyname'}.
        All rights reserved.
      </p>
    )}
  </div>
);

export default SiteCopyRight;
