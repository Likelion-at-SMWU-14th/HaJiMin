import * as S from "./styles/Oliveyoung.Styled";
import { categorys } from "./data/categoryData";
import { products } from "./data/productData";

function App() {
  return (
    <S.Page>
      <S.Display>
        {/* 상단 카테고리 */}
        <S.CategoryPanel>
          {categorys.map((category) => (
            <S.CategoryButton
              key={category.label}
              type="button"
              $variant={category.variant}
            >
              {category.label}
            </S.CategoryButton>
          ))}
        </S.CategoryPanel>
        {/* 메인 제품 리스트 */}
        <S.ProductGrid>
          {products.map((product) => (
            <S.ProductCard>
              <S.ProductCardImage src={product.image} />
              <S.ProductCardBrand>{product.brand}</S.ProductCardBrand>
              <S.ProductCardName>{product.name}</S.ProductCardName>
              <S.ProductCardPrice>{product.price}</S.ProductCardPrice>
              <S.ProductCardTagList>
                {product.tags.map((tag) => (
                  <S.ProductCardTag $variant={tag}>{tag}</S.ProductCardTag>
                ))}
              </S.ProductCardTagList>
            </S.ProductCard>
          ))}
        </S.ProductGrid>
      </S.Display>
    </S.Page>
  );
}

export default App;
