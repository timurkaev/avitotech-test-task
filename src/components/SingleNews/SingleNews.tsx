import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchComments, fetchNewsById } from "../../redux/slices/newsSlice";
import { NewsItem } from "../News/NewsItem";
import { Comments } from "../Comments/Comments";
import { Preloader } from "../UI/Preloader/Preloader";

export const SingleNews: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { newsById, isLoading } = useAppSelector((state) => state.news);
  const { comments } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  const getNewsById = (): void => {
    dispatch(fetchNewsById(Number(id)));
  };

  const getComments = (): void => {
    dispatch(fetchComments(Number(id)));
  };

  React.useEffect(() => {
    getNewsById();
    getComments();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div>
      <NewsItem type={"newsById"} news={newsById} />
      <Comments getComments={() => getComments()} comments={comments} news={newsById} />
    </div>
  );
};
