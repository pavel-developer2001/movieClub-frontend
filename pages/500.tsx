import { NextPage } from "next"
import MainLayout from "../layouts/MainLayout"

const Custom500: NextPage = () => {
  return (
    <MainLayout>
      Произошла ошибка в облачном хранилище. Извиняемся за неудобства, наши
      специалисты уже разбираются.
    </MainLayout>
  )
}

export default Custom500
