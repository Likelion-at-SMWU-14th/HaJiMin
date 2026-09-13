import Button from "../components/Button";
import styled from "styled-components";
import DetailComment from "../components/DetailComment";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("GET"); // API 요청 상태 변수
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const goToEditPage = () => {
    navigate(`/edit/${id}`);
  };

  const getDetail = (id) => {
    setStatus("GET"); // 특정 게시글 조회 상태 GET
    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/${id}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteComment = (id) => {
    setStatus("DELETE"); // 게시글 삭제 상태 DELETE
    setLoading(true);
    setError(false);

    axios
      .delete(`${baseURL}/entries/${id}/`)
      .then((res) => {
        console.log("게시글 삭제가 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        alert("게시글 삭제에 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  const statusMessages = {
    GET: {
      loading: "특정 게시글을 불러오는 중입니다 . . . 🐢",
      error:
        "특정 게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥",
    },
    DELETE: {
      loading: "게시글을 삭제하는 중입니다 . . . 🐢",
      error: "게시글을 삭제하지 못했습니다. 잠시 후 다시 시도해주세요 ! ! 💥",
    },
  };

  if (loading) {
    return <Message>{statusMessages[status].loading}</Message>;
  }

  if (error) {
    return <Message>{statusMessages[status].error}</Message>;
  }

  return (
    <DetailPageWrapper>
      <DetailComment detail={detail} />
      <ButtonWrapper>
        <Button text="수정하기" onBtnClick={goToEditPage} />
        <Button text="삭제하기" onBtnClick={() => deleteComment(id)} />
      </ButtonWrapper>
    </DetailPageWrapper>
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
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
