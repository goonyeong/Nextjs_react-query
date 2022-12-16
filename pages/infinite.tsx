import { useInfiniteFetchMovies } from "utils/queries/queries";
import styled from "styled-components";
import { TMBD_IMAGE_URL } from "utils/apis/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Infinite = () => {
  const { data: movieData, fetchNextPage, hasNextPage } = useInfiniteFetchMovies({ size: 10 });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!movieData) return;

    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Wrapper>
        <List>
          {movieData?.pages.map((page) =>
            page.result.results.map((movie) => (
              <Container key={movie.id}>
                <ImageContainer>
                  <img src={`${TMBD_IMAGE_URL}${movie.poster_path}`} alt="artist image" />
                </ImageContainer>
                <h3 className="name" onClick={() => {}}>
                  {movie.original_title.slice(0, 10)}
                </h3>
              </Container>
            ))
          )}
        </List>
        <Inview_Tag ref={ref} />
      </Wrapper>
    </>
  );
};

export default Infinite;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  min-height: 110vh;
  position: relative;
`;

const List = styled.section`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 20px;
`;

const Container = styled.article`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary_color};
  border-radius: 2rem;
  height: 240px;
  .name {
    font-size: 1.5rem;
    margin-top: 10px;
    text-align: center;
    line-height: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 160px;
  width: 100%;
  border-radius: 3px;
  img {
    object-fit: cover;
    object-position: top;
  }
`;

const Inview_Tag = styled.div`
  position: absolute;
  bottom: 100px;
  width: 30px;
  height: 30px;
  background-color: #ffee00;
`;
