import styled from "styled-components";

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
          <CartButton />
        </ActionBlock>

        <BookList></BookList>
      </Container>
    </>
  );
}

export default App;
