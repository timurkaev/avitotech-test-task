import React from "react";
import styles from "./News.module.css";
import { NewsItem } from "./NewsItem";
import { NewsInterface } from "../../interfaces/news.interface";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Button } from "../UI/Button/Button";
import { Preloader } from "../UI/Preloader/Preloader";

interface NewsProps {
  getNews: () => void;
}

export const News: React.FC<NewsProps> = ({ getNews }): JSX.Element => {
  const { news, isLoading } = useAppSelector((state) => state.news);

  const sortedNewsByDate: NewsInterface[] = [...news]?.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
  );

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={styles.news}>
      <Button size="medium" color="primary" onClick={getNews}>
        Update news
      </Button>
      {sortedNewsByDate.map((n: NewsInterface) => (
        <NewsItem key={n?.id} type={"newsItem"} news={n} />
      ))}
    </div>
  );
};
