import { useFetchMovieList } from "utils/queries/queries";
import styled from "styled-components";
import Image from "next/image";
import { TMBD_IMAGE_URL } from "utils/apis/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Infinite = () => {
  const { data: movieData, fetchNextPage, hasNextPage } = useFetchMovieList({ pageSize: 10 });
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log("movies", movieData);
  }, [movieData]);

  useEffect(() => {
    if (!movieData) return;

    console.log("in? :", inView);

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
                <ImageContainer width="100%" height="80px" borderRadius="3rem">
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
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 20px;
`;

const Container = styled.article`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary_color};
  border-radius: 2rem;
  height: 120px;
  .name {
    font-size: 1.5rem;
    margin-top: 10px;
    text-align: center;
    line-height: 1;
  }
`;

const ImageContainer = styled.div<{
  width: string;
  height: string;
  borderRadius?: string;
}>`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;

const Inview_Tag = styled.div`
  position: absolute;
  bottom: 100px;
  width: 30px;
  height: 30px;
  background-color: #ffee00;
`;
