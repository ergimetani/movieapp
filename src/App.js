import React from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import app_pic from "../src/img/movie.png"
import MovieDetails from "./pages/MovieDetails"
import MoviesPage from "./pages/MoviesPage"
import { useNavigate } from "react-router-dom"

export const API_KEY = "c0e6057a"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Navbar = styled.div`
  background-color: #4b4bae;
  color: #f2c443;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`

const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: cursive;
`

const Logo = styled.img`
  width: 45px;
  height: 35px;
  margin: 15px;
`

function App() {
  const navigate = useNavigate()

  function home() {
    navigate("/")
  }

  return (
    <Container>
      <Navbar>
        <Name>
          <Logo src={app_pic} onClick={home} />
          Star Movies
        </Name>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<MoviesPage />} />
        <Route path="/details/:movieID" element={<MovieDetails />} />
      </Routes>
    </Container>
  )
}

export default App
