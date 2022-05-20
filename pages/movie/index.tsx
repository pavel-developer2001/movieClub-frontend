import { NextPage } from "next"
import React from "react"
import MovieCard from "../../components/UI/MovieCard"
import MainLayout from "../../layouts/MainLayout"

const MovieCatalogPage: NextPage = () => {
  return (
    <MainLayout>
      MovieCatalogPage
      <MovieCard widthCover={173} heightCover={260} width="173" height="338" />
    </MainLayout>
  )
}

export default MovieCatalogPage
