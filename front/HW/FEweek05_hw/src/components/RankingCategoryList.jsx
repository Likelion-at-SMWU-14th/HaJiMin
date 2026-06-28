import * as S from "../styles/Oliveyoung.Styled";
import { categorys } from "../data/categoryData";
import RankingCategoryButton from "./RankingCategoryButton";

function RankingCategoryList() {
  return (
    <S.CategoryPannel>
      {categorys.map((category) => (
        <RankingCategoryButton
          key={category.label}
          label={category.label}
          variant={category.variant}
        >
          {category.label}
        </RankingCategoryButton>
      ))}
    </S.CategoryPannel>
  );
}

export default RankingCategoryList;
