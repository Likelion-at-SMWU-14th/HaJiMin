import styled from "styled-components";
import CartIcon from "./assets/cart-icon.svg";
import plus from "./assets/plus.svg";
import BookItem from "./components/BookItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookStore, useCartStore } from "./store/store";

function App() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const results = useBookStore((s) => s.results);
  const isLoading = useBookStore((s) => s.isLoading);
  const error = useBookStore((s) => s.error);
  const search = useBookStore((s) => s.search);
  const addCart = useCartStore((s) => s.addCart);
  const cartItems = useCartStore((s) => s.cartItems);

  const handleSearch = () => {
    const trimmed = searchText.trim();
    if (!trimmed) return;
    search(trimmed, "ko");
  };

  // 초기 진입 시 소설(한국어)로 자동 검색
  useEffect(() => {
    search("드라마", "ko");
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Title>🦁 사자 책방</Title>
          <SubTitle>좋은 책과 함께하는 하루</SubTitle>
        </Header>

        <ActionBlock>
          <SearchBar
            value={searchText}
            placeholder="책 제목을 검색해보세요"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          />
          <CartButton onClick={() => navigate("/cart")}>
            <CartIconImg src={CartIcon} alt="장바구니 아이콘" />
            {cartItems.length > 0 && <ItemCount>{cartItems.length}</ItemCount>}
          </CartButton>
        </ActionBlock>

        {isLoading && <StatusText>검색 중...</StatusText>}
        {error && <StatusText error>{error}</StatusText>}

        <BookList>
          {results.map((book) => (
            <BookItem
              key={
                book.id ||
                `${book.volumeInfo?.title}-${book.volumeInfo?.authors?.[0]}`
              }
              book={book}
              rightBlock={
                <AddBtn onClick={() => addCart(book)} type="button">
                  <img src={plus} alt="책 추가" />
                </AddBtn>
              }
            />
          ))}
        </BookList>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: min(56.25rem, calc(100% - 4rem));
  margin: 0 auto;
  padding: 0 0 5rem 0;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.div`
  display: flex;
  padding: 3.25rem 0 0.5rem 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.37rem;
`;

const Title = styled.p`
  color: #1a1512;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.75rem; /* 100% */
  margin: 0;
`;

const SubTitle = styled.p`
  color: #9e8e7e;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.21875rem; /* 150% */
  margin: 0;
`;

const ActionBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #ede8e3;
  box-sizing: border-box;
`;

const SearchBar = styled.input`
  display: flex;
  max-width: 30rem;
  width: 30rem;
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
  position: relative;
  cursor: pointer;

  color: rgba(26, 21, 18, 0.5);
  font-size: 0.875rem;
  font-weight: 400;
`;

const CartIconImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

const ItemCount = styled.p`
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -0.125rem;
  top: -0.125rem;
  transform: translate(15%, -15%);
  border-radius: 62.4375rem;
  background: #d4845a;

  color: #fff;
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 0.6875rem; /* 100% */
  margin: 0;
`;

const StatusText = styled.p`
  margin: 0.75rem 0 0;
  color: ${(props) => (props.error ? "#d14b4b" : "#7a6a5c")};
  font-size: 0.875rem;
  font-weight: 500;
`;

const BookList = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
`;

const AddBtn = styled.button`
  border: none;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background: #d4845a;
  box-shadow: 0 2px 8px 0 rgba(212, 132, 90, 0.35);
  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;
