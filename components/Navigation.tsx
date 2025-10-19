'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/#achievements') {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#achievements';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Florian Soller
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link href="/#achievements">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/project">
                Project
              </Link>
            </li>
            <li>
              <Link href="/writing">
                Writing
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className={styles.bottomNav} aria-label="Mobile navigation">
        <div className={styles.bottomNavContainer}>
          <Link
            href="/#achievements"
            className={`${styles.navItem} ${isActive('/#achievements') ? styles.active : ''}`}
            aria-label="Achievements"
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-4 4v-12h8v12l-4-4z"/>
              <circle cx="12" cy="7" r="3"/>
            </svg>
            <span className={styles.navLabel}>Achievements</span>
          </Link>

          <Link
            href="/project"
            className={`${styles.navItem} ${isActive('/project') ? styles.active : ''}`}
            aria-label="Project"
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
              <line x1="9" y1="3" x2="9" y2="21" strokeWidth={2}/>
            </svg>
            <span className={styles.navLabel}>Project</span>
          </Link>

          <Link
            href="/writing"
            className={`${styles.navItem} ${isActive('/writing') ? styles.active : ''}`}
            aria-label="Writing"
          >
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span className={styles.navLabel}>Writing</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
