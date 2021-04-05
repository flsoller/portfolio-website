import Image from 'next/image';
import Layout from '../components/Layout';

export default function FourOhFour() {
  return (
    <Layout title="404 - Page not found">
      <div className="flex flex-col items-center mt-12">
        <Image src="/404.svg" width="300" height="300" alt="Page not found" />
        <h1 className="text-center font-bold text-2xl tracking-wider text-green-900">
          Whoops...
        </h1>
        <p className="text-center text-green-900">
          Looks like this page does not exist !
        </p>
      </div>
    </Layout>
  );
}
