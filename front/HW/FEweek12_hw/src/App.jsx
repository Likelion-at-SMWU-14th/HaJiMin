import styled from "styled-components";
import CartIcon from "./assets/cart-icon.svg";
import BookItem from "./components/BookItem";

function App() {
  return (
    <>
      <Container>
        <Header>
          <Title>🦁 사자 책방</Title>
          <SubTitle>좋은 책과 함께하는 하루</SubTitle>
        </Header>

        <ActionBlock>
          <SearchBar />
          <CartButton>
            <CartIcon src={CartIcon} alt="장바구니 아이콘" />
          </CartButton>
        </ActionBlock>

        <BookList></BookList>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 56.25rem;
  max-width: 56.25rem;
  padding: 0 2rem 5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  padding: 3.25rem 0 0.5rem 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.38rem;
`;

const Title = styled.p`
  color: #1a1512;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.75rem; /* 100% */
`;

const SubTitle = styled.p`
  color: #9e8e7e;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.21875rem; /* 150% */
`;

const ActionBlock = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #ede8e3;
`;

const SearchBar = styled.input`
  display: flex;
  max-width: 30rem;
  padding: 0.625rem 1rem;
  align-items: center;
  border-radius: 0.75rem;
  border: 1.5px solid rgba(0, 0, 0, 0);
  background: #f3efe9;

  color: rgba(26, 21, 18, 0.5);
  font-size: 0.875rem;
  font-weight: 400;
`;

const CartButton = styled.button`
  border: none;
  display: flex;
  width: 2.875rem;
  height: 2.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border: 1.5px solid #ede8e3;
  background: #fff;
`;

const CartIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

const BookList = styled.div`
  display: flex;
  width: 52.25rem;
  height: 69.6875rem;
  padding-top: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
`;
