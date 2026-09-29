import type { Recipe } from "../types/recipe.ts";
import * as S from "../styles/styled.ts";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <S.Card $ready={false}>
      <S.CardTitle>
        {recipe.title}
        <S.CardMark $ready={false}>재료 확인 전</S.CardMark>
      </S.CardTitle>

      <S.CardLabel>재료</S.CardLabel>
      <S.CardText>{recipe.ingredients}</S.CardText>

      <S.CardLabel>조리법</S.CardLabel>
      <S.CardText>{recipe.instructions}</S.CardText>
    </S.Card>
  );
}
