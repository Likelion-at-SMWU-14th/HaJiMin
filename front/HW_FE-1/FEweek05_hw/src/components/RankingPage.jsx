import * as S from "../styles/Oliveyoung.Styled";
import RankingCategoryList from "./RankingCategoryList";
import RankingProductList from "./RankingProductList";

function RankingPage() {
  return (
    <S.Page>
      <S.Display>
        {/* 상단 카테고리 */}
        <RankingCategoryList />
        {/* 메인 제품 리스트 */}
        <RankingProductList />
      </S.Display>
    </S.Page>
  );
}

export default RankingPage;
