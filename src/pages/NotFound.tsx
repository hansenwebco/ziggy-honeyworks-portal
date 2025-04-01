
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Honeycomb } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4">
        <Honeycomb className="text-honeycomb h-20 w-20 mb-6 animate-float" />
        <h1 className="text-5xl md:text-6xl font-bold text-beeBlack mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oh honey, this page isn't in our hive!</p>
        <p className="text-gray-600 max-w-md text-center mb-10">
          It looks like you've wandered into an empty honeycomb. Let's get you back to where the honey flows.
        </p>
        <Link
          to="/"
          className="bg-honeycomb text-white font-semibold py-3 px-8 rounded-md hover:bg-honeycomb-dark transition-colors duration-300"
        >
          Return to Hive
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
