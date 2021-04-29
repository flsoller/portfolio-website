import Link from 'next/link';

import { MenuItem } from '../lib/types';

export default function NavBar() {
  const menuItems: MenuItem[] = [
    { pageName: 'Home', href: '/' },
    { pageName: 'Blog', href: '/blog' },
    { pageName: 'Projects', href: '/projects' },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <ul className="relative flex items-center h-16 space-x-6 justify-center">
        {menuItems.map((item) => {
          return (
            <li key={item.pageName}>
              <Link href={item.href}>
                <a className=" text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 text-center rounded-md text-lg font-medium">
                  {item.pageName}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
