import * as S from "../styles/Oliveyoung.Styled";
import { products } from "../data/productData";
import RankingProductCard from "./RankingProductCard";

function RankingProductList() {
  return (
    <S.ProductGrid>
      {products.map((product) => (
        <RankingProductCard
          key={product.name}
          image={product.image}
          brand={product.brand}
          name={product.name}
          price={product.price}
          tags={product.tags}
        />
      ))}
    </S.ProductGrid>
  );
}

export default RankingProductList;
