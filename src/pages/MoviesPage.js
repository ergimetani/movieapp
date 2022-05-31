import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { API_KEY } from "../App"
import MovieComponent from "../components/MovieComponent"
import background from "../img/background.jpg"
import searchpic from "../img/search.png"

const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`
const NoResult = styled.img`
  opacity: 15%;
`
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 25%;
  background-color: white;
`
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
`

function MoviesPage() {
  const navigate = useNavigate()

  const [movieList, setMovieList] = useState([])
  const [searchQuery, updateSearchQuery] = useState("")

  const onTextChange = (e) => {
    updateSearchQuery(e.target.value)
  }

  const fetchData = async (searchParam) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchParam}&apikey=${API_KEY}`
    )
    if (response.data.Response !== "True") {
      return setMovieList([])
    }
    setMovieList(response.data.Search.slice(0, 3))
  }

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery)
    } else {
      return setMovieList([])
    }
  }, [searchQuery])

  const handleMovieSelect = (imdbID) => {
    navigate(`/details/${imdbID}`)
  }

  return (
    <div>
      <SearchContainer>
        <SearchBox>
          <SearchIcon src={searchpic} />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </SearchContainer>
      <ResultListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={handleMovieSelect}
            />
          ))
        ) : (
          <NoResult src={background} />
        )}
      </ResultListContainer>
    </div>
  )
}

export default MoviesPage
