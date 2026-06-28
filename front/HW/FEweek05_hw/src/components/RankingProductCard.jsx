import * as S from "../styles/Oliveyoung.Styled";

function RankingProductCard({ image, brand, name, price, tags }) {
  return (
    <S.ProductCard>
      <S.ProductCardImage src={image} />
      <S.ProductCardBrand>{brand}</S.ProductCardBrand>
      <S.ProductCardName>{name}</S.ProductCardName>
      <S.ProductCardPrice>{price}</S.ProductCardPrice>
      <S.ProductCardTagList>
        {tags.map((tag) => (
          <S.ProductCardTag $variant={tag}>{tag}</S.ProductCardTag>
        ))}
      </S.ProductCardTagList>
    </S.ProductCard>
  );
}

export default RankingProductCard;
