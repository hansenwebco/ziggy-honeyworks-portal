
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Users, CalendarDays, Honeycomb, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Ziggy Johnson",
      role: "Founder & Chief Beekeeper",
      bio: "Former software architect with a passion for beekeeping, Ziggy combined his two loves to create the most efficient API solutions in the industry."
    },
    {
      name: "Maya Williams",
      role: "CTO & Lead Developer",
      bio: "With over 15 years in API development, Maya ensures our hives are structured for maximum efficiency and compatibility."
    },
    {
      name: "Carlos Rodriguez",
      role: "Integration Specialist",
      bio: "Carlos helps our partners connect to our API ecosystem seamlessly, solving complex integration challenges with ease."
    },
    {
      name: "Priya Patel",
      role: "Data Structure Engineer",
      bio: "Priya designs our data schemas with the same precision and elegance found in natural honeycomb structures."
    }
  ];

  const timeline = [
    {
      year: 2016,
      event: "Ziggy's Honeyworks founded in Tampa, Florida by Ziggy Johnson."
    },
    {
      year: 2017,
      event: "Released our first API endpoint for basic data transformation."
    },
    {
      year: 2019,
      event: "Expanded our hive with advanced workflow integration capabilities."
    },
    {
      year: 2020,
      event: "Introduced the Partner Program to foster collaborative growth."
    },
    {
      year: 2022,
      event: "Reached milestone of 1,000+ active API integrations."
    },
    {
      year: 2023,
      event: "Launched our new Honeycomb Architecture for even more efficient data processing."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        subtitle="The story behind Tampa's buzziest API company"
      />

      {/* Company Story */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-beeBlack">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Ziggy's Honeyworks was born from a unique combination of passions. Our founder, Ziggy Johnson, was a software architect by profession and a beekeeper by hobby. One day, while tending to his hives in sunny Tampa, Florida, he had an epiphany: the structured efficiency of honeycomb architecture could be applied to API design.
            </p>
            <p className="text-gray-700 mb-6">
              Just as bees construct perfect hexagonal cells to maximize space and minimize material, Ziggy envisioned APIs that would efficiently handle data with minimal overhead. And just as honey flows smoothly from the comb, data would flow seamlessly between systems.
            </p>
            <p className="text-gray-700 mb-6">
              In 2016, Ziggy left his corporate job and founded Ziggy's Honeyworks with a mission to create the most efficient, reliable API solutions in the industry. Drawing inspiration from the collaborative nature of bee colonies, he assembled a team of talented engineers who shared his vision.
            </p>
            <p className="text-gray-700">
              Today, our growing hive of developers continues to create innovative API solutions that help businesses of all sizes integrate their systems with the same natural efficiency found in a beehive. Based in sunny Tampa, we bring a bit of Florida's warmth and brightness to every interaction.
            </p>
          </div>

          {/* Our Values */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-title">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="bg-honey-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Honeycomb className="text-honeycomb-dark h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-beeBlack">Structured Efficiency</h3>
                <p className="text-gray-600">
                  Like the perfect hexagons in a honeycomb, we believe in elegantly structured solutions that maximize efficiency.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="bg-honey-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-honeycomb-dark h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-beeBlack">Collaborative Spirit</h3>
                <p className="text-gray-600">
                  Bees achieve amazing things through collaboration, and so do we. Partnership is at the core of our approach.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="bg-honey-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-honeycomb-dark h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-beeBlack">Sweet Results</h3>
                <p className="text-gray-600">
                  We're committed to delivering solutions that are as satisfying as they are effective—the technological equivalent of honey.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-title">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-honey-200 rounded-full w-20 h-20 mb-4"></div>
                  <h3 className="text-xl font-bold mb-1 text-beeBlack">{member.name}</h3>
                  <p className="text-honeycomb font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Journey</h2>
            <div className="mt-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-honeycomb"></div>
              
              {/* Timeline Events */}
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                      <div className="flex items-center mb-2">
                        <CalendarDays className="text-honeycomb h-5 w-5 mr-2" />
                        <span className="font-bold text-honeycomb">{item.year}</span>
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  <div className="z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-honeycomb border-4 border-white"></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
