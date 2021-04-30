import Link from 'next/link';

import { BlogPreview } from '../lib/types';

export default function PostPreview(props: BlogPreview) {
  const { date, postTitle, tags, introText, slug } = props;

  return (
    <article>
      <div className="md:grid md:grid-cols-4 md:items-baseline">
        <p className="text-base md:tracking-wide font-medium text-gray-500 pb-2">
          {date}
        </p>
        <div className="col-span-3">
          <p className="text-xl font-bold text-gray-800">{postTitle}</p>
          <div className="flex space-x-3">
            {tags.map((tag) => {
              return (
                <p
                  className="text-sm font-medium uppercase text-blue-400 tracking-wider"
                  key={tag}
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <p className="pt-4 text-gray-500">{introText}</p>
          <Link href={`/blog/${slug}`}>
            <a className="text-blue-400 tracking-wider pt-4">Read more...</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
