import Comment from "./Comment";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = () => {
  // 서버에서 API 응답을 받아와서 저장할 state 선언
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getComment = () => {
    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/`)
      .then((res) => {
        console.log(res);
        setComments(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        // 요청이 끝나면 finally 실행
        setLoading(false);
      });
  };

  // 컴포넌트가 처음 마운트 됐을 때 API 요청 및 데이터 받아오기
  useEffect(() => {
    getComment();
  }, []);

  if (loading) {
    return <Message>게시글을 불러오는 중입니다 . . . 🐢</Message>;
  }

  if (error) {
    return (
      <Message>
        게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥
      </Message>
    );
  }

  if (comments.length === 0) {
    return <Message>아직 등록된 게시글이 없어요 . . 🥲</Message>;
  }

  return (
    <CommentWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CommentWrapper>
  );
};

export default CommentList;

const CommentWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 2rem 3.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem 1.75rem;
`;

const Message = styled.div`
  padding: 2rem 3.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: #5e5e5e;
`;
