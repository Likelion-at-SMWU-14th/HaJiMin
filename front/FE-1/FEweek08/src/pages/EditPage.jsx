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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("GET"); // API 요청 상태 변수
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getComment = (id) => {
    setStatus("GET"); // 기존 게시글 조회 상태 GET
    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/${id}`)
      .then((res) => {
        console.log(res);
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const editComment = (id) => {
    setStatus("PUT"); // 게시글 수정 상태 PUT
    setLoading(true);
    setError(false);

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
        setError(true);
        alert("게시글 수정에 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getComment(id); // 마운트 시 상세 TMI 조회
  }, []);

  const statusMessages = {
    GET: {
      loading: "특정 게시글을 불러오는 중입니다 . . . 🐢",
      error:
        "특정 게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥",
    },
    PUT: {
      loading: "게시글을 수정하는 중입니다 . . . 🐢",
      error: "게시글을 수정하지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥",
    },
  };

  if (loading) {
    return <Message>{statusMessages[status].loading}</Message>;
  }

  if (error) {
    return <Message>{statusMessages[status].error}</Message>;
  }

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

const Message = styled.div`
  padding: 2rem 3.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: #5e5e5e;
`;
