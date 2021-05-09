import Head from 'next/head';

// Component imports
import Navbar from '../components/Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  twitterCardImageURL?: string;
};

export default function Layout(props: LayoutProps) {
  const {
    children,
    title = '',
    description = '',
    twitterCardImageURL = 'https://res.cloudinary.com/dgop5kvdk/image/upload/c_crop,h_1400,w_1400/v1620229066/portfolio-website/portfolio-website-home.png',
  } = props;
  return (
    <div className="flex flex-col w-full min-h-screen min-w-min bg-bgColor">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@flsoller" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitterCardImageURL} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="mt-16">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
