import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../styles/Movie.Styled";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <S.Container>
      {/* 필터링 버튼 리스트 */}
      <S.FilterList></S.FilterList>

      {/* 메인 무비차트 */}
      <S.Title>무비차트</S.Title>

      <S.MovieGrid>
        {movies.map((movie) => (
          <S.MovieCard key={movie.id}>
            <S.Poster src={movie.poster} alt={movie.title} />

            <S.MovieInfo>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.Rating>⭐ {movie.rating}</S.Rating>
              <S.Genre>{movie.genre}</S.Genre>
              <S.Description>{movie.description}</S.Description>
            </S.MovieInfo>
          </S.MovieCard>
        ))}
      </S.MovieGrid>
    </S.Container>
  );
};

export default Movie;
