import Link from 'next/link';

import { BlogPost } from '../lib/types';

export default function PostPreview(props: BlogPost) {
  const { title, tags, description, slug } = props;

  return (
    <article>
      <div className="flex md:max-w-3xl">
        <div className="">
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
          <Link
            href={`/blog/${slug}`}
            className="text-blue-600 tracking-wide pt-4"
          >
            Read more...
          </Link>
        </div>
      </div>
    </article>
  );
}
