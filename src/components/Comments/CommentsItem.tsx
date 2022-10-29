import React from "react";
import styles from "./Comments.module.css";
import cn from "classnames";

import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";

import { NewsInterface } from "../../interfaces/news.interface";
import { NewsApi } from "../../api/newsApi/news.api";
import { ShortenText } from "../UI/ShortenComment/ShortenText";

interface NewsCommentsItemProps {
  comment: NewsInterface;
  level: 1 | 2;
}

export const CommentsItem: React.FC<NewsCommentsItemProps> = ({ comment, level }): JSX.Element => {
  const [kids, setKids] = React.useState<NewsInterface[]>([]);
  const [showChildComments, setShowChildComments] = React.useState<boolean>(true);

  const handleFetchCommentKids = async (): Promise<void> => {
    if (comment.kids?.length !== 0 || comment.kids) {
      const response = await Promise.all(
        comment.kids?.map(async (kid) => {
          const res = await NewsApi.getNewsById(kid);
          return res;
        }),
      );
      setKids(response);
    }
    setShowChildComments(false);
  };

  return (
    <div
      className={cn(styles.commentsItem, {
        [styles.levelTwo]: level === 2,
      })}
      key={comment.id}
    >
      <div className={styles.userInfo}>
        <Avatar />
        <span>{comment.by}</span>
      </div>
      <div className={styles.commentText}>
        <ShortenText comment={comment} />
        {showChildComments && comment.kids !== undefined && (
          <Button size="small" color="ghost" onClick={handleFetchCommentKids}>
            view answers
          </Button>
        )}
      </div>

      {kids &&
        kids.map((comment: NewsInterface) => (
          <CommentsItem level={2} key={comment.id} comment={comment} />
        ))}
    </div>
  );
};
