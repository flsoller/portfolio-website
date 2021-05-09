import { RichTextContent } from 'contentful';

export type Project = {
  imgSource: string;
  name: string;
  description: string;
  hostedLink: string;
  sourceLink: string;
  noDemo?: boolean;
  index?: number;
};

export type MenuItem = {
  pageName: string;
  href: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  body?: RichTextContent;
  twitterCardUrl?: string;
  picture: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            height: number;
            width: number;
          };
        };
      };
    };
  };
};
