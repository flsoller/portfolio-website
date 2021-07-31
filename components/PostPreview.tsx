import Link from 'next/link';

import { BlogPost } from '../lib/types';

export default function PostPreview(props: BlogPost) {
  const { date, title, tags, description, slug } = props;

  return (
    <article>
      <div className="md:grid md:grid-cols-4 md:items-baseline">
        <p className="text-base md:tracking-wide font-medium text-gray-500 pb-2">
          {date}
        </p>
        <div className="col-span-3">
          <p className="text-xl font-bold text-gray-800">{title}</p>
          <div className="flex space-x-3">
            {tags &&
              tags.map((tag) => {
                return (
                  <p
                    className="text-sm font-medium uppercase text-blue-600 tracking-wider"
                    key={tag}
                  >
                    {tag}
                  </p>
                );
              })}
          </div>
          <p className="py-4 text-gray-800">{description}</p>
          <Link href={`/blog/${slug}`}>
            <a className="text-blue-600 tracking-wide pt-4">Read more...</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
