import React from "react"
import styled from "styled-components"

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`
const Cover = styled.img`
  object-fit: cover;
  height: 360px;
`
const MovieTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #968787;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MovieComponent = (props) => {
  const { Title, imdbID, Poster } = props.movie

  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect(imdbID)
      }}
    >
      <Cover src={Poster} alt={Title} />
      <MovieTitle>{Title}</MovieTitle>
    </MovieContainer>
  )
}
export default MovieComponent
