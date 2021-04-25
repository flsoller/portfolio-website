import Image from 'next/image';
import Layout from '../components/Layout';

export default function FourOhFour() {
  return (
    <Layout title="404 - Page not found" description="Page not found">
      <div className="flex flex-col items-center mt-12">
        <Image src="/404.svg" width="300" height="300" alt="Page not found" />
        <h1 className="text-center font-bold text-2xl tracking-wider text-gray-800">
          Whoops...
        </h1>
        <p className="text-center text-gray-800 mb-8">
          Looks like the page you are looking for does not exist!
        </p>
      </div>
    </Layout>
  );
}
