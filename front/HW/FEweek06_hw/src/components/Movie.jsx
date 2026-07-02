import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../styles/Movie.Styled";
import { genres } from "../data/genreData";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("전체");

  // 선택된 장르 필터링
  const displayedMovies =
    selectedGenre === "전체"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

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
      <S.Title>무비차트</S.Title>

      {/* 필터링 버튼 리스트 */}
      <S.FilterList>
        {genres.map((genre) => (
          <S.FilterButton
            key={genre.id}
            onClick={() => setSelectedGenre(genre.name)}
          >
            {genre.name}
          </S.FilterButton>
        ))}
      </S.FilterList>

      {/* 검색창 */}
      <S.SearchBar placeholder="검색어를 입력하세요" />

      {/* 메인 무비차트 */}
      <S.MovieGrid>
        {displayedMovies.map((movie) => (
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
