import styled from "styled-components";

const BookItem = ({ book, rightBlock = AddBtn }) => {
  return (
    <>
      <BookContainer>
        <BookInfo>
          <BookImg />
          <BookTextBlock>
            <BookTitle></BookTitle>
            <BookAuthor></BookAuthor>
            <BookDate></BookDate>
            <BookPrice></BookPrice>
          </BookTextBlock>
        </BookInfo>
        <AddBtn />
      </BookContainer>
    </>
  );
};

export default BookItem;
