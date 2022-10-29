import { NewsInterface } from "./news.interface";

export interface CommentsStateInterface {
  comments: NewsInterface[];
  commentsLoading: boolean;
  error: string;
}
