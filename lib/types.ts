export type Project = {
  imgSource: string;
  name: string;
  description: string;
  hostedLink: string;
  sourceLink: string;
  noDemo?: boolean;
};

export type MenuItem = {
  pageName: string;
  href: string;
};

export type BlogPreview = {
  date: string;
  postTitle: string;
  tags: string[];
  introText: string;
};
