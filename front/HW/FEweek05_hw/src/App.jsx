import "./App.css";
import * as S from "./styles/Oliveyoung.Styled";

function App() {
  return (
    <S.Page>
      <S.Display>
        {/* 상단 카테고리 */}
        <S.CategoryPanel>
          <S.CategoryButton>1</S.CategoryButton>
          <S.CategoryButton>2</S.CategoryButton>
          <S.CategoryButton>3</S.CategoryButton>
          <S.CategoryButton>4</S.CategoryButton>
          <S.CategoryButton>5</S.CategoryButton>
          <S.CategoryButton>6</S.CategoryButton>
          <S.CategoryButton>7</S.CategoryButton>
          <S.CategoryButton>8</S.CategoryButton>
        </S.CategoryPanel>

        {/* 메인 제품 리스트 */}
        <S.ProductGrid>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
          <S.ProductCard>
            <S.ProductCardImage />
            <S.ProductCardBrand>상품 브랜드</S.ProductCardBrand>
            <S.ProductCardName>상품 이름</S.ProductCardName>
            <S.ProductCardPrice>가격</S.ProductCardPrice>
            <S.ProductCardTagList>
              <S.ProductCardTag>세일</S.ProductCardTag>
              <S.ProductCardTag>쿠폰</S.ProductCardTag>
              <S.ProductCardTag>오늘드림</S.ProductCardTag>
            </S.ProductCardTagList>
          </S.ProductCard>
        </S.ProductGrid>
      </S.Display>
    </S.Page>
  );
}

export default App;
