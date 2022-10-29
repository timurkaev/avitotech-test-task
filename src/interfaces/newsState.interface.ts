import { NewsInterface } from "./news.interface";

export interface NewsStateInterface {
  ids: number[];
  news: NewsInterface[];
  newsById: NewsInterface;
  isLoading: boolean;
  error: string;
}
