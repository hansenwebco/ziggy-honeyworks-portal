
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Hexagon, Map, FileSignature } from 'lucide-react';

const Hives = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Hives" 
        subtitle="Explore our API infrastructure and sign up for access to our integration solutions"
      />

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center mb-8">
                <Hexagon className="text-honeycomb h-8 w-8 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-beeBlack">About Our Hives</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                At Ziggy's Honeyworks, we've structured our API ecosystem like a natural beehive - organized, efficient, and producing the sweetest results. Our "hives" represent our specialized API clusters, each designed to serve specific integration needs.
              </p>
              
              <p className="text-gray-700 mb-6">
                From data transformation to workflow automation, our hives work together to create a complete ecosystem that helps your business thrive. Each hive is maintained with the same care and attention that beekeepers give to their colonies.
              </p>
              
              <div className="flex items-center mt-10 mb-6">
                <Map className="text-honeycomb h-7 w-7 mr-3" />
                <h3 className="text-xl font-bold text-beeBlack">Our Hive Locations</h3>
              </div>
              
              <p className="text-gray-700 mb-8">
                While our physical headquarters buzz with activity in sunny Tampa, Florida, our API hives are distributed across strategic data centers throughout North America, ensuring optimal performance and reliability for all our partners.
              </p>
            </div>
            
            {/* E-Signature Section */}
            <div className="bg-honey-50 rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-8">
                <FileSignature className="text-honeycomb h-8 w-8 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-beeBlack">Access Our Hives</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                To access our API hives, we require a simple electronic signature on our terms of service and data processing agreement. This ensures that all parties understand how our APIs should be used and how data will be handled.
              </p>
              
              {/* Iframe placeholder */}
              <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-inner flex items-center justify-center mb-8">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold text-beeBlack mb-4">E-Signature Process</h3>
                  <p className="text-gray-600 mb-4">
                    Please review our terms of service and sign electronically to gain access to our API hives.
                  </p>
                  <div className="p-4 bg-honey-100 rounded-lg inline-block">
                    <p className="text-gray-700 font-medium">
                      [IFRAME PLACEHOLDER]
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      E-signature form will be embedded here
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic text-center">
                After signing, you'll receive immediate access to our documentation portal and API keys via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hives;
