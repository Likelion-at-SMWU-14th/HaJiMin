import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Display = styled.div`
  width: 70vw;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CategoryPannel = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  padding: 1rem 0rem 4rem;
`;

export const CategoryButton = styled.div`
  max-height: 4rem;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0.5rem;
  border: 0.5px solid #a1a1a1;
  font-size: 1rem;

  background-color: ${({ $variant }) => {
    if ($variant === "selected") {
      return "#d45757";
    }
    return "#ffffff";
  }};
`;

export const ProductGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  padding-bottom: 2rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
`;

export const ProductCardBrand = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #706868;
`;

export const ProductCardName = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #0f0f0f;
`;

export const ProductCardPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #3c3a3a;
`;

export const ProductCardTagList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductCardTag = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #ffffff;

  border-radius: 1rem;
  padding: 0.2rem 0.5rem;

  background-color: ${({ $variant }) => {
    if ($variant === "세일") {
      return "#cd2d2d";
    }
    if ($variant === "쿠폰") {
      return "#61cd50";
    }
    if ($variant === "증정") {
      return "#35b9d7";
    }
    return "#cf51b2";
  }};
`;
