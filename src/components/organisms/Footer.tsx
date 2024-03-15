import {
  FooterContactDetails,
  FooterLogoAndValuePhrase,
  FooterSocialMediaLinks,
  SiteCopyRight,
} from '../molecules';
interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer>
      <div
        className={`px-4 pt-16 bg-skin-primary text-white   sm:max-w-xl min-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ${className}`}
      >
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterLogoAndValuePhrase />
          <FooterContactDetails />
          <FooterSocialMediaLinks />
        </div>

        <SiteCopyRight />
      </div>
    </footer>
  );
}
