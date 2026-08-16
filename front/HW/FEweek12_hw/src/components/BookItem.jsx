import styled from "styled-components";

const BookItem = ({ book, rightBlock }) => {
  return (
    <>
      <BookContainer>
        <BookInfo>
          <BookImgBox>
            <BookImg />
          </BookImgBox>
          <BookTextBlock>
            <BookTitle></BookTitle>
            <BookAuthor></BookAuthor>
            <BookDate></BookDate>
            <BookPrice></BookPrice>
          </BookTextBlock>
        </BookInfo>
        {rightBlock}
      </BookContainer>
    </>
  );
};

export default BookItem;

const BookContainer = styled.div`
  display: flex;
  padding: 1.25rem 0.25rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  border-bottom: 1px solid #ede8e3;
`;

const BookInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const BookImgBox = styled.div`
  display: flex;
  width: 3.875rem;
  height: 5.5rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.375rem;
  background: #c9a27e;
  box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.12);
`;

const BookImg = styled.img`
  width: 100%;
  flex-shrink: 0;
  contain: object-fit;
`;

const BookTextBlock = styled.div`
  display: flex;
  width: 42.875rem;
  flex-direction: column;
  align-items: flex-start;
`;

const BookTitle = styled.p`
  color: #1a1512;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3rem; /* 130% */
  margin-bottom: 0.25rem;
`;

const BookAuthor = styled.p`
  color: #7a6b5e;
  font-size: 0.84375rem;
  font-weight: 400;
  line-height: 1.26563rem; /* 150% */
  margin-bottom: 0.19rem;
`;

const BookDate = styled.p`
  color: #b4a49a;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  margin-bottom: 0.5rem;
`;

const BookPrice = styled.p`
  color: #c96b38;
  font-size: 0.90625rem;
  font-weight: 700;
  line-height: 1.35938rem; /* 150% */
`;
