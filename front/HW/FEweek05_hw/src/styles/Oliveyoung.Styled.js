import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #838383;
`;

export const Display = styled.div`
  width: 80vw;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: #9c4b4b;
`;

export const CategoryPanel = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  padding-bottom: 5rem;

  background-color: #33db74;
`;

export const CategoryButton = styled.div`
  min-height: 4rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 1.5rem;

  border: 1px solid #a1a1a1;
`;

export const ProductGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  background-color: #3368db;
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
  font-size: 1.7rem;
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
  background-color: #831e92;

  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
`;
