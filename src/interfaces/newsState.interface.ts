import { NewsInterface } from "./news.interface";

export interface NewsStateInterface {
  ids: number[];
  news: NewsInterface[];
  params: number[];
  newsById: NewsInterface;
  isLoading: boolean;
  error: string;
}
