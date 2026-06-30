import * as S from "../styles/Oliveyoung.Styled";
import { categories } from "../data/categoryData";
import RankingCategoryButton from "./RankingCategoryButton";

function RankingCategoryList() {
  return (
    <S.CategoryPanel>
      {categories.map((category) => (
        <RankingCategoryButton
          key={category.id}
          label={category.label}
          variant={category.variant}
        >
          {category.label}
        </RankingCategoryButton>
      ))}
    </S.CategoryPanel>
  );
}

export default RankingCategoryList;
