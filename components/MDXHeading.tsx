'use client';

import { ReactNode } from 'react';
import styles from './MDXHeading.module.css';

interface MDXHeadingProps {
  children: ReactNode;
}

function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function extractTextContent(children: ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextContent).join('');
  }
  if (children && typeof children === 'object' && 'props' in children) {
    const element = children as { props: { children?: ReactNode } };
    return extractTextContent(element.props.children);
  }
  return '';
}

export function H2({ children }: MDXHeadingProps) {
  const textContent = extractTextContent(children);
  const slug = generateSlug(textContent);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState({}, '', `#${slug}`);
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <h2 id={slug} className={styles.heading}>
      {children}
      <a href={`#${slug}`} className={styles.anchor} onClick={handleClick} aria-label="Link to this section">
        #
      </a>
    </h2>
  );
}
