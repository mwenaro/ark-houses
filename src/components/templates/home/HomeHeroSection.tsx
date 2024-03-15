// HomeHeroSection.tsx

const HomeHeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white w-full mb-12"
      style={{ backgroundImage: 'url("/images/easy-about.webp")' }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Revolutionize Your Logistics with EasyTruck</h1>
        <p className="text-lg mb-8">Reliable Tracking, Precise Predictions, and Unmatched Security for Your Cargo</p>
        <a href="#contact-us" className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HomeHeroSection;
