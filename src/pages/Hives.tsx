
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Hexagon, Map, FileSignature, Info } from 'lucide-react';

const Hives = () => {
  return (
    <Layout>
      <PageHeader 
        title="Visit Our Hives" 
        subtitle="Experience the buzz of our bee farms and taste the freshest honey straight from the source"
      />

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center mb-8">
                <Hexagon className="text-honeycomb h-8 w-8 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-beeBlack">Visit Our Bee Farms</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                At Ziggy's Honeyworks, we invite you to experience the wonder of our working bee farms. Watch our busy bees in action as they create the golden nectar we're famous for, and learn about the fascinating world of beekeeping from our expert apiarists.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our guided tours take you through our honeycomb observation rooms, flowering gardens, and extraction facilities. You'll even get to sample fresh honey varieties directly from the hive to your spoon!
              </p>
              
              <div className="flex items-center mt-10 mb-6">
                <Map className="text-honeycomb h-7 w-7 mr-3" />
                <h3 className="text-xl font-bold text-beeBlack">Farm Locations</h3>
              </div>
              
              <p className="text-gray-700 mb-8">
                Our main visitor center and apiaries are located just outside of Tampa, Florida, surrounded by acres of wildflowers and citrus groves. We also have seasonal satellite locations throughout Florida that are open during peak flowering seasons.
              </p>
              
              <div className="flex items-center mt-10 mb-6">
                <Info className="text-honeycomb h-7 w-7 mr-3" />
                <h3 className="text-xl font-bold text-beeBlack">Tour Information</h3>
              </div>
              
              <ul className="list-disc pl-10 mb-8 space-y-2 text-gray-700">
                <li>Tours run daily at 10am, 1pm, and 3pm</li>
                <li>Admission: $15 for adults, $8 for children (5-12), Free for children under 5</li>
                <li>Tour duration: Approximately 90 minutes</li>
                <li>Protective gear is provided for close-up hive viewings</li>
                <li>Remember to wear closed-toe shoes and weather-appropriate clothing</li>
              </ul>
            </div>
            
            {/* E-Signature Waiver Section */}
            <div className="bg-honey-50 rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-8">
                <FileSignature className="text-honeycomb h-8 w-8 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-beeBlack">Visitor Waiver</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                For the safety of our visitors and our bees, we require all guests to sign a visitor waiver before touring our facilities. This helps us ensure you have a safe and enjoyable experience at our hives.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6">
                <p className="text-amber-700 font-medium flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Please note: While rare, bee stings can occur during farm visits. If you have bee allergies, please inform our staff before your tour.
                </p>
              </div>
              
              {/* Iframe placeholder */}
              <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-inner flex items-center justify-center mb-8">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold text-beeBlack mb-4">Visitor Waiver</h3>
                  <p className="text-gray-600 mb-4">
                    Please review and sign our visitor waiver electronically to complete your tour reservation.
                  </p>
                  <div className="p-4 bg-honey-100 rounded-lg inline-block">
                    <p className="text-gray-700 font-medium">
                      [IFRAME PLACEHOLDER]
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      E-signature waiver form will be embedded here
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic text-center">
                After signing, you'll receive a confirmation email with your tour details and visitor guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hives;
