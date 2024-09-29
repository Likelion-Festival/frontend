export interface PageData {
  id: string;
  images: string[];
  pageType: number;
  subTitle: string;
  mainTitle: string;
  mainText: string;

  summary?: string;
  guide?: string;

  location?: string;
  date?: string;
  time?: string;

  index1?: string;
  index2?: string;
  phrase1?: string;
  phrase2?: string;
}
