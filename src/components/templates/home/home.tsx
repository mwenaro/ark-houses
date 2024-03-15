// src/App.tsx

import {
  HomeAboutUs,
  HomeHeader,
  HomeHeroSection,
  HomeWhyUs,
  HomeTestimonials,
  HomeContactUs,
  HomeFooter,
  HomeOurPartners,
} from ".";


const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen lg:bg-gray-100">
      <HomeHeader />
      <HomeHeroSection />
      <HomeAboutUs />
      <HomeWhyUs />
      <HomeTestimonials />
      <HomeContactUs />
      {/* <HomeOurPartners /> */}
      <HomeFooter />
    </div>
  );
};

export default Home;
