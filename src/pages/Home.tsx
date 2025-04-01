
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, MapPin, Honeycomb, Workflow, FileText } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb-pattern opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beeBlack mb-6">
              Sweet API Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10">
              Welcome to Ziggy's Honeyworks, where we transform complex data into smooth-flowing honey-like APIs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/partners" 
                className="bg-honeycomb text-white font-semibold py-3 px-8 rounded-md hover:bg-honeycomb-dark transition-colors duration-300 flex items-center justify-center"
              >
                Become a Partner <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-beeBlack font-semibold py-3 px-8 rounded-md border border-honeycomb hover:bg-honey-50 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Location badge */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-6 shadow-md flex items-center">
          <MapPin size={18} className="text-honeycomb mr-2" />
          <span className="font-medium">Based in sunny Tampa, Florida</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-honey-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Honey-Sweet API Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-honeycomb">
              <div className="bg-honeycomb-light rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Workflow className="text-beeBlack h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workflow Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing workflows, just like bees work together in perfect harmony.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-honeycomb">
              <div className="bg-honeycomb-light rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Honeycomb className="text-beeBlack h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hive Architecture</h3>
              <p className="text-gray-600">
                Our structured API design ensures efficient data flow, modeled after nature's perfect honeycomb structure.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-honeycomb">
              <div className="bg-honeycomb-light rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FileText className="text-beeBlack h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Clear, comprehensive documentation that makes implementation as smooth as honey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="bg-honeycomb rounded-lg w-64 h-64 md:w-80 md:h-80 mx-auto"></div>
                <div className="absolute -bottom-6 -right-6 bg-honey-100 rounded-lg w-64 h-64 md:w-80 md:h-80 border border-honeycomb"></div>
                <div className="absolute -top-6 -left-6 bg-honey-200 rounded-lg w-32 h-32 md:w-40 md:h-40 border border-honeycomb"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-beeBlack">Why Choose Ziggy's Honeyworks?</h2>
              <p className="text-gray-700 mb-6">
                Founded by Ziggy "The Beekeeper" Johnson in sunny Tampa, Florida, our company brings together the precision of beekeeping and the innovation of modern APIs.
              </p>
              <p className="text-gray-700 mb-8">
                Just as bees are nature's most efficient workers, our APIs are designed to work tirelessly, integrating your systems with precision and reliability.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-semibold text-honeycomb hover:text-honeycomb-dark transition-colors duration-300"
              >
                Learn more about our story <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beeBlack text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Sweeten Your Tech Stack?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our hive of successful partners and experience the difference of our honey-smooth API integrations.
          </p>
          <Link 
            to="/partners" 
            className="bg-honeycomb text-white font-semibold py-3 px-8 rounded-md hover:bg-honeycomb-dark transition-colors duration-300 inline-flex items-center"
          >
            Become a Partner <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
