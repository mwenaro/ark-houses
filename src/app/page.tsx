import {
  ContactSection,
  Footer,
  Header,
  HeroSection,
  PageWrapper,
  PopularPlaces,
  PropertyForRent,
  PropertyForSale,
} from "@/pagez";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <PropertyForSale />
      <PropertyForRent />
      <PopularPlaces />
      <ContactSection />
    </PageWrapper>
  );
}
