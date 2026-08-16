import styled from "styled-components";

function CartPage() {
  return (
    <>
      <Container>
        <Header>
          <BackBtn />
          <HeaderTextBlock>
            <Title>장바구니</Title>
            <SubTitle>총 3권</SubTitle>
          </HeaderTextBlock>
        </Header>

        <CartList></CartList>
        <Footer>
          <FooterTextBlock>
            <FooterLabel>총 결제 금액</FooterLabel>
            <TotalPrice></TotalPrice>
          </FooterTextBlock>
          <PurchaseBtn>구매하기</PurchaseBtn>
        </Footer>
      </Container>
    </>
  );
}

export default CartPage;
