import MovieList from "../movie/Movie-List";
import styled from "styled-components";
function MainContent({ movies, onClick }) {
  return (
    <ContentText className="content-text">
      <MovieList movies={movies} onClick={onClick}></MovieList>
    </ContentText>
  );
}
export default MainContent;
const ContentText = styled.div`
    display: flex;
    justify-content: center;
`