import Comment from "./Comment";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = () => {
  // 서버에서 API 응답을 받아와서 저장할 state 선언
  const [comments, setComments] = useState([]);

  const getComment = () => {
    axios
      .get("http://127.0.0.1:8000/entries/")
      .then((res) => {
        console.log(res);
        setComments(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 컴포넌트가 처음 마운트 됐을 때 API 요청 및 데이터 받아오기
  useEffect(() => {
    getComment();
  }, []);

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
