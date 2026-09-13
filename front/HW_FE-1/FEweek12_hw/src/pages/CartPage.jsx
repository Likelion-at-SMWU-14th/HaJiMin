import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import deleteBtn from "../assets/delete.svg";
import BookItem from "../components/BookItem";
import { useCartStore } from "../store/store";

function CartPage() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const removeCart = useCartStore((state) => state.removeCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());

  return (
    <>
      <Container>
        <MainContent>
          <Header>
            <BackBtn type="button" onClick={() => navigate(-1)}>
              <BackImg src={back} alt="뒤로가기 아이콘" />
            </BackBtn>
            <HeaderTextBlock>
              <Title>장바구니</Title>
              <SubTitle>총 {totalQuantity}권</SubTitle>
            </HeaderTextBlock>
          </Header>

          <CartList>
            {cartItems.length === 0 ? (
              <EmptyText>장바구니가 비어 있습니다.</EmptyText>
            ) : (
              cartItems.map((item) => (
                <BookItem
                  key={item.id}
                  book={item.book}
                  rightBlock={
                    <Right>
                      <QuantityBlock>
                        <Minus
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Minus>
                        <Quantity>{item.quantity}</Quantity>
                        <Plus
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Plus>
                      </QuantityBlock>
                      <DeleteBtn
                        type="button"
                        onClick={() => removeCart(item.id)}
                      >
                        <DeleteImg src={deleteBtn} alt="삭제 아이콘" />
                      </DeleteBtn>
                    </Right>
                  }
                />
              ))
            )}
          </CartList>
        </MainContent>

        <Footer>
          <FooterContent>
            <FooterTextBlock>
              <FooterLabel>총 결제 금액</FooterLabel>
              <TotalPrice>
                <PriceText>{totalPrice.toLocaleString()}</PriceText>원
              </TotalPrice>
            </FooterTextBlock>
            <PurchaseBtn
              type="button"
              onClick={() => {
                clearCart();
                navigate("/");
              }}
            >
              구매하기
            </PurchaseBtn>
          </FooterContent>
        </Footer>
      </Container>
    </>
  );
}

export default CartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5.78rem;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  width: min(56.25rem, calc(100% - 4rem));
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 0 1.25rem 0;
  align-items: center;
  gap: 0.875rem;
  border-bottom: 1.5px solid #ede8e3;
`;

const BackBtn = styled.button`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 1.5px solid #ede8e3;
  background: #fff;
  cursor: pointer;
  flex-shrink: 0;
`;

const BackImg = styled.img`
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
  object-fit: contain;
`;

const HeaderTextBlock = styled.div`
  display: flex;
  width: 4.75344rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const Title = styled.p`
  color: #1a1512;
  font-size: 1.375rem;
  font-weight: 800;
  line-height: 1.375rem; /* 100% */
`;

const SubTitle = styled.p`
  color: #9e8e7e;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.21875rem; /* 150% */
`;

const CartList = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
`;

const EmptyText = styled.p`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  color: #9e8e7e;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
  margin-left: auto;
`;

const QuantityBlock = styled.div`
  display: flex;
  width: 6.4375rem;
  height: 2.3125rem;
  align-items: center;
  border-radius: 0.625rem;
  border: 1.5px solid #ede8e3;
  box-sizing: border-box;
`;

const Minus = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: #7a6b5e;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6875rem; /* 150% */
`;

const Quantity = styled.p`
  display: flex;
  width: 2rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-right: 1px solid #ede8e3;
  border-left: 1px solid #ede8e3;
  box-sizing: border-box;
  margin: 0;

  color: #1a1512;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
`;

const Plus = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const DeleteBtn = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1.5px solid #ede8e3;
`;

const DeleteImg = styled.img`
  display: block;
  width: 0.875rem;
  height: 0.875rem;
  object-fit: contain;
`;

const Footer = styled.div`
  width: 100%;
  height: 5.78rem;
  display: flex;
  padding: 1.125rem 2rem;
  flex-direction: column;
  align-items: flex-start;

  position: fixed;
  bottom: 0;
  left: 0;

  border-top: 1.5px solid #ede8e3;
  background: rgba(250, 250, 248, 0.95);
`;

const FooterContent = styled.div`
  display: flex;
  width: min(56.25rem, calc(100% - 4rem));
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const FooterTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

const FooterLabel = styled.p`
  color: #9e8e7e;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.21875rem; /* 150% */
`;

const TotalPrice = styled.p`
  color: #7a6b5e;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.40625rem; /* 150% */
  display: flex;
  align-items: flex-end;
  gap: 0.09rem;
`;

const PriceText = styled.span`
  color: #1a1512;
  font-size: 1.375rem;
  font-weight: 800;
  line-height: 2.0625rem; /* 150% */
`;

const PurchaseBtn = styled.button`
  border: none;
  display: flex;
  padding: 0.875rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  background: #d4845a;
  box-shadow: 0 4px 16px 0 rgba(212, 132, 90, 0.4);

  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.0125rem;
  cursor: pointer;
`;
