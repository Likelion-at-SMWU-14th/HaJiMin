import * as S from "../styles/Oliveyoung.Styled";

function RankingCategoryButton({ label, variant }) {
  return (
    <S.CategoryButton type="button" $variant={variant}>
      {label}
    </S.CategoryButton>
  );
}

export default RankingCategoryButton;
