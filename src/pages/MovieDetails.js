import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { API_KEY } from "../App"

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  //   justify-content: center;
`
const Cover = styled.img`
  object-fit: cover;
  height: 400px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
const MovieTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
  font-style: italic;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`
const Info = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  -webkit-text-stroke: medium;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`

function MovieDetails(id, props) {
  const [movieInfo, setMovieInfo] = useState()

  const params = useParams()

  useEffect(() => {
    if (params.movieID) {
      axios
        .get(`https://www.omdbapi.com/?i=${params.movieID}&apikey=${API_KEY}`)
        .then((response) => setMovieInfo(response.data))
    }
  }, [params])

  return (
    <section>
      <DetailsContainer>
        {movieInfo ? (
          <>
            <Cover src={movieInfo?.Poster} alt={movieInfo?.Title} />
            <InfoContainer>
              <MovieTitle>
                {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </MovieTitle>
              <Info>
                IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </Info>
              <Info>
                Year: <span>{movieInfo?.Year}</span>
              </Info>
              <Info>
                Released: <span>{movieInfo?.Released}</span>
              </Info>
              <Info>
                Rated: <span>{movieInfo?.Rated}</span>
              </Info>
              <Info>
                Language: <span>{movieInfo?.Language}</span>
              </Info>
              <Info>
                Runtime: <span>{movieInfo?.Runtime}</span>
              </Info>
              <Info>
                Genre: <span>{movieInfo?.Genre}</span>
              </Info>
              <Info>
                Director: <span>{movieInfo?.Director}</span>
              </Info>
              <Info>
                Actors: <span>{movieInfo?.Actors}</span>
              </Info>
              <Info>
                Plot: <span>{movieInfo?.Plot}</span>
              </Info>
            </InfoContainer>
          </>
        ) : (
          <div className="spring-spinner">
            <div className="spring-spinner-part top">
              <div className="spring-spinner-rotator"></div>
            </div>
            <div className="spring-spinner-part bottom">
              <div className="spring-spinner-rotator"></div>
            </div>
          </div>
        )}
      </DetailsContainer>
    </section>
  )
}

export default MovieDetails
