import Head from 'next/head';

// Component imports
import Navbar from '../components/Navbar';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout(props: LayoutProps) {
  const { children, title = 'Placeholder Title' } = props;
  return (
    <div className="w-full min-w-min">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
