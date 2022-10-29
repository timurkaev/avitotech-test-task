import axios from "axios";
import { baseUrl } from "../index";
import { NewsInterface } from "../../interfaces/news.interface";

const instance = axios.create({
  baseURL: baseUrl,
});

export class NewsApi {
  static async getNews(): Promise<number[]> {
    const response = await instance
      .get("/topstories.json")
      .then(({ data }) => data)
      .catch((err) => console.warn(err));
    return response;
  }
  static async getNewsById(newsId: number): Promise<NewsInterface> {
    const response = await instance
      .get(`/item/${newsId}.json`)
      .then(({ data }) => data)
      .catch((err) => console.warn(err));
    return response;
  }
}
