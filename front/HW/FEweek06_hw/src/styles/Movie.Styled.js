import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 40px;
  background-color: #ffffff;
  color: #111;
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const MovieCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  background-color: #1f1f1f;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

export const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
`;

export const MovieInfo = styled.div`
  padding: 16px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const Rating = styled.p`
  margin-bottom: 8px;
  color: #ffd166;
  font-size: 15px;
`;

export const Genre = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  line-height: 1.5;
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button`
  width: 4rem;
  height: 1.5rem;

  border-radius: 0.3125rem;
  border: 1px solid rgba(194, 94, 6, 0.5);
  opacity: 0.4;
  background: #fff;
  box-shadow: 1px 1px 4px 0 rgba(194, 94, 6, 0.5);

  color: #383434;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #c25e06;
    opacity: 0.4;
  }
`;

export const SearchBar = styled.input`
  width: 15rem;
  height: 2rem;

  border-radius: 0.3125rem;
  border: 1px solid rgba(194, 94, 6, 0.5);
  opacity: 0.4;
  background: #fff;
  box-shadow: 1px 1px 4px 0 rgba(194, 94, 6, 0.5);

  color: #383434;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  padding-left: 0.5rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border: 1px solid rgba(194, 94, 6, 0.5);
  }
`;
