import React from "react";
import styles from "../../Comments/Comments.module.css";
import { NewsInterface } from "../../../interfaces/news.interface";

interface ShortenTextProps {
  comment: NewsInterface;
}

export const ShortenText: React.FC<ShortenTextProps> = ({ comment }): JSX.Element => {
  const [commentTextLen, setCommentTextLen] = React.useState<number>(200);

  const showFullComment = (id: number): void => {
    if (id === comment.id) {
      setCommentTextLen(commentTextLen + 1600);
    }
  };

  const hideFullComment = (id: number): void => {
    if (id === comment.id) {
      setCommentTextLen(commentTextLen - 1600);
    }
  };

  if (comment.text?.length >= 200) {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: comment.text?.slice(0, commentTextLen) }} />
        {commentTextLen > 200 ? (
          <div onClick={() => hideFullComment(comment.id)} className={styles.fullComment}>
            hide
          </div>
        ) : (
          <div onClick={() => showFullComment(comment.id)} className={styles.fullComment}>
            read completely
          </div>
        )}
      </>
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: comment.text }} />;
};
