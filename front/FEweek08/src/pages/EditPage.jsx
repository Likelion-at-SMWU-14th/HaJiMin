import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getComment = (id) => {
    axios
      .get(`${baseURL}/entries/${id}`)
      .then((res) => {
        console.log(res);
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editComment = (id) => {
    axios
      .put(`${baseURL}/entries/${id}/`, {
        // request-body 요청 부분
        author: author,
        comment: comment,
      })
      .then((res) => {
        console.log("게시글 수정이 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("게시글 수정에 실패했습니다.");
      });
  };

  useEffect(() => {
    getComment(id); // 마운트 시 상세 TMI 조회
  }, []);

  return (
    <EditPageWrapper>
      <CommentForm
        setAuthor={setAuthor}
        setComment={setComment}
        author={author}
        comment={comment}
      />
      <ButtonWrapper>
        <Button text="수정하기" onBtnClick={() => editComment(id)} />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </EditPageWrapper>
  );
};

export default EditPage;

const EditPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;
