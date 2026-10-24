export interface Thought {
  slug: string;
  title: string;
  description: string;
  date: string;
  ogImage?: string;
  replaceTitle?: string;
  later?: string;
  laterText?: string;
  earlier?: string;
  earlierText?: string;
  contentHtml: string;
}
