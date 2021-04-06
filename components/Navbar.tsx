import Link from 'next/link';

export default function NavBar() {
  const menuItems = [
    { pageName: 'Home', href: '/' },
    { pageName: 'Blog', href: '/blog' },
    { pageName: 'Projects', href: '/projects' },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="relative flex items-center h-16 space-x-6 justify-center">
        {menuItems.map((item) => {
          return (
            <Link href={item.href} key={item.pageName}>
              <a className=" text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 text-center rounded-md text-base font-medium">
                {item.pageName}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
