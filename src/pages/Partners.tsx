
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Check } from 'lucide-react';

const Partners = () => {
  // Benefits of partnership
  const benefits = [
    "Priority access to our newest API endpoints and features",
    "Dedicated technical support from our bee-utiful support team",
    "Custom integration solutions tailored to your specific needs",
    "Co-marketing opportunities to cross-pollinate our audiences",
    "Reduced rates on premium API calls and higher rate limits",
    "Regular strategy sessions with our API experts"
  ];

  return (
    <Layout>
      <PageHeader 
        title="Become a Partner" 
        subtitle="Join our hive and build something sweet together"
      />

      <section className="py-10 mb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-beeBlack">Why Partner With Ziggy's Honeyworks?</h2>
            <p className="text-gray-700 mb-6">
              At Ziggy's Honeyworks, we believe in the power of collaboration. Just as bees work together to create something sweet, we partner with businesses to create powerful API integrations.
            </p>
            <p className="text-gray-700 mb-8">
              Our partner program offers exclusive benefits designed to help your business thrive through seamless API solutions.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-beeBlack">Partnership Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-honeycomb mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-700 italic">
              "Partnering with Ziggy's Honeyworks has revolutionized our data integration process. Their APIs are as smooth as honey!" — Jane Smith, CTO at TechBuzz
            </p>
          </div>
          
          {/* Full width form iframe */}
          <div className="bg-honey-50 rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-beeBlack mb-4 text-center">Partner Onboarding Form</h3>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Fill out our onboarding form to start the partnership process. Our team will review your application and contact you within 48 hours.
            </p>
            <div className="w-full h-[600px] bg-white border border-gray-200 rounded-lg shadow-inner flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-700 font-medium">
                  [IFRAME PLACEHOLDER]
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Partner workflow form will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
