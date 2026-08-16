import styled from "styled-components";
import back from "../assets/back.svg";

function CartPage() {
  return (
    <>
      <Container>
        <MainContent>
          <Header>
            <BackBtn>
              <BackImg src={back} alt="뒤로가기 아이콘" />
            </BackBtn>
            <HeaderTextBlock>
              <Title>장바구니</Title>
              <SubTitle>총 3권</SubTitle>
            </HeaderTextBlock>
          </Header>

          <CartList></CartList>
        </MainContent>
        <Footer>
          <FooterContent>
            <FooterTextBlock>
              <FooterLabel>총 결제 금액</FooterLabel>
              <TotalPrice>
                <PriceText></PriceText>원
              </TotalPrice>
            </FooterTextBlock>
            <PurchaseBtn>구매하기</PurchaseBtn>
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
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  width: 56.25rem;
  max-width: 56.25rem;
  min-height: 44.6875rem;
  padding: 0 2rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  padding: 3rem 0 1.25rem 0;
  align-items: center;
  gap: 0.875rem;
  border-bottom: 1.5px solid #ede8e3;
`;

const BackBtn = styled.button`
  display: flex;
  width: 2.375rem;
  height: 2.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 1.5px solid #ede8e3;
  background: #fff;
`;

const BackImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
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
  flex: 1;
  display: flex;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
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
  width: 56.25rem;
  max-width: 56.25rem;
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
`;
