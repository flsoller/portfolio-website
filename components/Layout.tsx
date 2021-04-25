import Head from 'next/head';

// Component imports
import Navbar from '../components/Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export default function Layout(props: LayoutProps) {
  const { children, title = '', description = '' } = props;
  return (
    <div className="flex flex-col w-full min-h-screen min-w-min bg-bgBlue">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
