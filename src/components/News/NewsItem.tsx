import React from "react";
import styles from "./News.module.css";
import { NewsInterface } from "../../interfaces/news.interface";
import { Link } from "react-router-dom";
import { CalendarIcon } from "./icons/CalendarIcon";
import { UserIcon } from "./icons/UserIcon";
import { RatingIcon } from "./icons/RatingIcon";
import { Button } from "../UI/Button/Button";
import { CommentIcon } from "./icons/CommentIcon";

interface NewsItemProps {
  news: NewsInterface;
  type: "newsItem" | "newsById";
}

export const NewsItem: React.FC<NewsItemProps> = ({ news, type }): JSX.Element => {
  const date = new Date(news.time * 1000);

  if (type === "newsById") {
    return (
      <>
        <Link to="/">
          <Button size="medium" color="primary">
            &larr; Back to home page
          </Button>
        </Link>
        <div className={`${styles.newsItem} ${styles.cursorOff}`}>
          <h1 className={styles.newsTitle}>{news.title}</h1>
          <a href={news.url}>
            <Button size="medium" color="ghost">
              Link on news
            </Button>
          </a>
          <div className={styles.newsInfo}>
            <div className={styles.newsData}>
              <CalendarIcon />
              <span>{date.toLocaleDateString()}</span>
            </div>
            <div className={styles.newsAuthor}>
              <UserIcon />
              <span>{news.by}</span>
            </div>
            <div className={styles.newsRating}>
              <RatingIcon />
              <span>{news.score}</span>
            </div>
          </div>
          <div className={styles.comment}>
            <CommentIcon />
            <span>{news.descendants}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <Link to={`/news/${news.id}`}>
      <div className={styles.newsItem}>
        <h1 className={styles.newsTitle}>{news.title}</h1>
        <div className={styles.newsInfo}>
          <div className={styles.newsData}>
            <CalendarIcon />
            <span>{date.toLocaleDateString()}</span>
          </div>
          <div className={styles.newsAuthor}>
            <UserIcon />
            <span>{news.by}</span>
          </div>
          <div className={styles.newsRating}>
            <RatingIcon />
            <span>{news.score}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
