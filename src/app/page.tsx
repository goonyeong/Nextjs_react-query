"use client";
import { TMBD_API_KEY } from "@/config";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { IMovieData, IPersonData } from "@/types/interfaceData";
import { QK_Movie_Popular, QK_Person_Popular } from "@/types/queryKey";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [moviePage, setMoviePage] = useState(1);
  const [personPage, setPersonPage] = useState(1);

  const { data: movieData } = useCustomQuery<{ results: IMovieData[] }>({
    queryKey: [...QK_Movie_Popular, moviePage.toString()],
    path: "/movie/popular",
    accessToken: "",
    params: {
      api_key: TMBD_API_KEY,
      page: moviePage,
    },
    options: {
      staleTime: 2000,
    },
  });

  const { data: personData } = useCustomQuery<{ results: IPersonData[] }>({
    queryKey: [...QK_Person_Popular, personPage.toString()],
    path: "/person/popular",
    accessToken: "",
    params: {
      api_key: TMBD_API_KEY,
      page: personPage,
    },
  });

  return (
    <Main>
      <ul className="ul">
        <div className="btnContainer">
          <div
            className="btn"
            onClick={() => {
              if (moviePage > 1) setMoviePage((prev) => prev - 1);
            }}
          >{`<`}</div>
          <div className="btn">{moviePage}</div>
          <div
            className="btn"
            onClick={() => {
              setMoviePage((prev) => prev + 1);
            }}
          >{`>`}</div>
        </div>
        {movieData &&
          movieData.results.map((movie) => (
            <li className="li" key={movie.id}>
              {movie.original_title}
            </li>
          ))}
      </ul>
      <ul className="ul">
        <div className="btnContainer">
          <div
            className="btn"
            onClick={() => {
              if (personPage > 1) setPersonPage((prev) => prev - 1);
            }}
          >{`<`}</div>
          <div className="btn">{personPage}</div>
          <div
            className="btn"
            onClick={() => {
              setPersonPage((prev) => prev + 1);
            }}
          >{`>`}</div>
        </div>
        {personData &&
          personData.results.map((person) => (
            <li className="li" key={person.id}>
              {person.name}
            </li>
          ))}
      </ul>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  .ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .btnContainer {
      height: 30px;
      display: flex;
      gap: 10px;
      .btn {
        height: 100%;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: aquamarine;
        cursor: pointer;
      }
    }
    .li {
      width: 100%;
    }
  }
`;
